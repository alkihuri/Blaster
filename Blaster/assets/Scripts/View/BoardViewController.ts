// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameConfig from "../Core/GameConfig";
import TileViewController from "./TileViewController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BoardViewController extends cc.Component {


tilesPool : TileViewController[] = [];

private tileSize : number;


// TBD OFSET. FROM CONFIG

private tileOffset : number = 5;

@property({type: cc.Node})
public tilesAnchor: cc.Node = null;

protected onLoad(): void { 
    this.InitPool();

    this.tileSize = this.cellPrefab.data.getComponent(cc.Sprite).spriteFrame.getRect().width;  
}


public  InitPool()
{
    for(let i = 0; i < 100; i++){
        const tile = cc.instantiate(this.cellPrefab).getComponent(TileViewController);
        tile.node.active = false;
        this.tilesPool.push(tile);
        this.node.addChild(tile.node);
    }
}

public GetTileFromPool() : TileViewController | null {
    for(let tile of this.tilesPool){
        if(!tile.node.active){
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

    public   GenrateBoard(config : GameConfig)  {


        const rows = config.boardRows;
        const cols = config.boardCols;

        var anchorBasePosition = this.tilesAnchor.position;
        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                const tile = this.GetTileFromPool();
                if(tile){
 
                    var tilePosition = cc.v3(j * this.tileSize + this.tileOffset, -i * this.tileSize + this.tileOffset).add(anchorBasePosition);
                    tile.node.setPosition(tilePosition);  
                    tile.node.active = true;
                    tile.getComponent<TileViewController>(TileViewController).updateData(config.allowedTiles[Math.floor(Math.random() * config.allowedTiles.length)]);
                }
            }
        }
    } 

}
