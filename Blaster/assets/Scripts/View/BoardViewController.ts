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
    tileGrid: TileViewController[][] = []; // 2D array to store tile references

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

        return new Promise(resolve => {

            cc.Tween.stopAllByTarget(tile.node);

            cc.tween(tile.node)
                .to(this.animationDuration, {
                    x: targetPos.x,
                    y: targetPos.y
                }, { easing: 'quadIn' })
                .call(resolve)
                .start();
        });
    }


    private animateTileDisappear(tile: TileViewController): Promise<void> {
        return new Promise((resolve) => {
            cc.tween(tile.node)
                .to(this.disappearDuration, { scale: 0, opacity: 0 })
                .call(() => {
                    tile.node.active = false;
                    tile.node.scale = 1;
                    tile.node.opacity = 255;
                    resolve();
                })
                .start();
        });
    }

    private animateTileAppear(tile: TileViewController): Promise<void> {
        return new Promise(resolve => {

            cc.Tween.stopAllByTarget(tile.node);

            tile.node.active = true;
            tile.node.scale = 0;
            tile.node.opacity = 0;

            cc.tween(tile.node)
                .to(this.appearDuration, { scale: 1, opacity: 255 })
                .call(resolve)
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
        const animationPromises: Promise<void>[] = [];

        for (let row = 0; row < oldState.rows; row++) {
            for (let col = 0; col < oldState.cols; col++) {
                const oldType = oldState.getTileAt(row, col);
                const newType = newState.getTileAt(row, col);

                if (oldType !== 0 && newType === 0) {
                    if (this.tileGrid[row] && this.tileGrid[row][col]) {
                        const tile = this.tileGrid[row][col];
                        animationPromises.push(this.animateTileDisappear(tile));
                        this.tileGrid[row][col] = null;
                    }
                }
            }
        }

        //console.log("STRART!");
        //await this.delay(200);
        if (animationPromises.length > 0) {
            await Promise.all(animationPromises);
            // animationPromises.clear(); // Clear the array for reuse
            animationPromises.length = 0;
        }

        //await this.delay(200);
        //console.log("FINISH1!");
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
                        tile.node.setPosition(targetPos);
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
        if (animationPromises.length > 0) {
            await Promise.all(animationPromises) && this.delay(50);
        }

        //console.log("FINISH2!");
    }



    public clearBoard() {
        // turn clickability off tilegrid 

        this.tilesPool.forEach(element => {
            element.isClickable = false;
        });
    }
}
