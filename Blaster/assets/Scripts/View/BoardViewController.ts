// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameConfig from "../Core/GameConfig";
import TileViewController, { TileClickCallback } from "./TileViewController";
import BoardState from "../Core/BoardState";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BoardViewController extends cc.Component {


    tilesPool: TileViewController[] = [];
    tileGrid: (TileViewController | null)[][] = []; // 2D array to store tile references

    private tileSize: number;


    // TBD OFSET. FROM CONFIG

    private tileOffset: number = 5;
    private animationDuration: number = 0.2; // duration for fall animation
    private disappearDuration: number = 0.15; // duration for disappear animation
    private appearDuration: number = 0.1; // duration for appear animation

    @property({ type: cc.Node })
    public tilesAnchor: cc.Node = null;

    private onTileClickCallback: TileClickCallback = null;

    protected onLoad(): void {
        this.InitPool();

        this.tileSize = this.cellPrefab.data.getComponent(cc.Sprite).spriteFrame.getRect().width;
        // Sanity-check animation durations
        if (this.animationDuration <= 0) {
            console.warn('animationDuration is <= 0 — setting to default 0.2');
            this.animationDuration = 0.2;
        }
        if (this.disappearDuration <= 0) {
            console.warn('disappearDuration is <= 0 — setting to default 0.15');
            this.disappearDuration = 0.15;
        }
        if (this.appearDuration <= 0) {
            console.warn('appearDuration is <= 0 — setting to default 0.1');
            this.appearDuration = 0.1;
        }
    }


    public InitPool() {
        for (let i = 0; i < 100; i++) {
            const tile = cc.instantiate(this.cellPrefab).getComponent(TileViewController);
            tile.node.active = false;
            this.tilesPool.push(tile);
            this.node.addChild(tile.node);
        }
    }

    public GetTileFromPool(): TileViewController | null {
        for (let tile of this.tilesPool) {
            if (!tile.node.active) {
                return tile;
            }
        }
        console.warn("No available tiles in pool");
        const newTile = cc.instantiate(this.cellPrefab).getComponent(TileViewController);
        newTile.node.active = false;
        this.tilesPool.push(newTile);
        this.node.addChild(newTile.node);
        return newTile;
    }

    @property(cc.Prefab)
    cellPrefab: cc.Prefab = null;

    public setTileClickCallback(callback: TileClickCallback) {
        this.onTileClickCallback = callback;
    }

    private getTileWorldPosition(row: number, col: number): cc.Vec3 {
        const anchorPos = this.tilesAnchor.position;
        return cc.v3(
            col * this.tileSize + this.tileOffset,
            -row * this.tileSize + this.tileOffset
        ).add(anchorPos);
    }

    private animateTileFall(
        tile: TileViewController,
        targetRow: number,
        targetCol: number
    ): Promise<void> {

        const targetPos = this.getTileWorldPosition(targetRow, targetCol);

        const start = Date.now();
        //console.log(`animateTileFall start [${tile.getRow()},${tile.getCol()}] -> [${targetRow},${targetCol}] dur=${this.animationDuration}`);
        return new Promise(resolve => {

            cc.Tween.stopAllByTarget(tile.node);

            cc.tween(tile.node)
                .to(this.animationDuration, {
                    x: targetPos.x,
                    y: targetPos.y
                }, { easing: 'quadIn' })
                .call(() => {
                    const end = Date.now();
                    //console.log(`animateTileFall end [${tile.getRow()},${tile.getCol()}] took=${end - start}ms`);
                    resolve();
                })
                .start();
        });
    }


    private async animateTileDisappear(tile: TileViewController): Promise<void> {

        await tile.BlinkColor(cc.Color.RED);

        return new Promise((resolve) => {
            cc.Tween.stopAllByTarget(tile.node);
            const originalX = tile.node.x;
            cc.tween(tile.node)
                .by(0.05, { x: 10 })
                .by(0.05, { x: -20 })
                .by(0.05, { x: 20 })
                .by(0.05, { x: -10 })
                .to(0.05, { x: originalX })
                .call(() => {
                    resolve();
                })
                .start();
        });
    }

    private animateTileAppear(tile: TileViewController): Promise<void> {
        const start = Date.now();
        //console.log(`animateTileAppear start [${tile.getRow()},${tile.getCol()}] dur=${this.appearDuration}`);
        return new Promise(resolve => {

            cc.Tween.stopAllByTarget(tile.node);

            tile.node.active = true;
            tile.node.scale = 0;
            tile.node.opacity = 0;

            cc.tween(tile.node)
                .to(this.appearDuration, { scale: 1, opacity: 255 })
                .call(() => {
                    const end = Date.now();
                    //console.log(`animateTileAppear end [${tile.getRow()},${tile.getCol()}] took=${end - start}ms`);
                    resolve();
                })
                .start();
        });
    }


    public GenrateBoard(config: GameConfig) {



        this.tilesPool.forEach(element => {
            element.isClickable = true;
        });

        const rows = config.boardRows;
        const cols = config.boardCols;

        this.tileGrid = [];

        var anchorBasePosition = this.tilesAnchor.position;
        for (let i = 0; i < rows; i++) {
            this.tileGrid[i] = [];
            for (let j = 0; j < cols; j++) {
                const tile = this.GetTileFromPool();
                if (tile) {

                    var tilePosition = cc.v3(j * this.tileSize + this.tileOffset, -i * this.tileSize + this.tileOffset).add(anchorBasePosition);
                    tile.node.setPosition(tilePosition);
                    tile.node.active = true;
                    tile.setPosition(i, j, this.onTileClickCallback);
                    tile.updateData(config.allowedTiles[Math.floor(Math.random() * config.allowedTiles.length)]);
                    this.tileGrid[i][j] = tile;
                }
            }
        }
    }


    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    public async updateBoardFromState(oldState: BoardState, newState: BoardState) {
        try {
            const animationPromises: Promise<void>[] = [];

            //console.log("Phase 1: Removing tiles...");
            for (let row = 0; row < oldState.rows; row++) {
                for (let col = 0; col < oldState.cols; col++) {
                    const oldType = oldState.getTileAt(row, col);
                    const newType = newState.getTileAt(row, col); 

                    if (oldType != newType) {
                        if (this.tileGrid[row] && this.tileGrid[row][col]) {
                            const tile = this.tileGrid[row][col];

                            if (newState.wasRemove.some(t => t.row === row && t.col === col)) {
                               

                            animationPromises.push(this.animateTileDisappear(tile));
                            }

                             animationPromises.push(
                                    tile.BlinkColor(cc.Color.RED)
                                ); // debug 
                            //this.tileGrid[row][col] = null;
                        }
                    }
                }
            }
            //console.log(`Waiting for ${animationPromises.length} blink animations...`);
            if (animationPromises.length > 0) {
                //console.log(`Waiting for ${animationPromises.length} disappear animations...`);
                await Promise.all(animationPromises);
                //console.log("All disappear animations complete");
            }
            animationPromises.length = 0;

            //console.log("Phase 2: Placing and animating tiles...");
            for (let row = 0; row < newState.rows; row++) {
                if (!this.tileGrid[row]) {
                    this.tileGrid[row] = [];
                }

                for (let col = 0; col < newState.cols; col++) {
                    const tileType = newState.getTileAt(row, col);
                    const tileData = newState.getTileDataByType(tileType);

                    if (tileData) {
                        let tile = this.tileGrid[row] && this.tileGrid[row][col];
                        let isNewTile = false;

                        if (!tile) {
                            tile = this.GetTileFromPool();
                            isNewTile = true;
                        }

                        if (tile) {
                            tile.updateData(tileData);
                            tile.setPosition(row, col, this.onTileClickCallback);
                            tile.node.active = true;

                            const targetPos = this.getTileWorldPosition(row, col);
                            // tile.node.setPosition(targetPos);
                            animationPromises.push(this.animateTileFall(tile, row, col));
                            this.tileGrid[row][col] = tile;

                            if (isNewTile) {
                                animationPromises.push(this.animateTileAppear(tile));
                            }
                        }
                    } else {
                        this.tileGrid[row][col] = null;
                    }
                }
            }

            console.log(`Waiting for ${animationPromises.length} fall/appear animations...`);
            if (animationPromises.length > 0) {
                await Promise.all(animationPromises);
                await this.delay(50);
            }

            if (animationPromises.length > 0) {
                //console.log(`Waiting for ${animationPromises.length} move/appear animations...`);
                await Promise.all(animationPromises);
                //console.log("All move/appear animations complete");
            }

            // Финальная задержка перед завершением
            // await this.delay(50);
            // console.log("updateBoardFromState complete");
        } catch (err) {
            console.error("Error in updateBoardFromState:", err);
        }
    }



    public clearBoard() {
        // turn clickability off tilegrid 

        this.tilesPool.forEach(element => {
            element.isClickable = false;
        });
    }
}
