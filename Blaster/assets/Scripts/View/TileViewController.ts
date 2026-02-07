// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import TileData from "../Core/TileData";
import { TileType } from "../Core/TileType";

const {ccclass, property} = cc._decorator;

export type TileClickCallback = (row: number, col: number, tile: TileViewController) => void;

@ccclass
export default class TileViewController extends cc.Component {

    @property({type:TileType})
    type: TileType =  TileType.Red;

    private row: number = -1;
    private col: number = -1;
    private onClickCallback: TileClickCallback = null;

    public setPosition(row: number, col: number, callback: TileClickCallback) {
        this.row = row;
        this.col = col;
        this.onClickCallback = callback;
    }

    public updateData(data : TileData) {
        
        this.type = data.type;
        this.node.getComponent(cc.Sprite).spriteFrame = data.sprite;    
        console.log("TileViewController updated with type: " + this.type);  
    }
    protected onLoad(): void {
        // Add click listener
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onTileClicked, this);
    }

    protected onDestroy(): void {
        this.node.off(cc.Node.EventType.MOUSE_DOWN, this.onTileClicked, this);
    }

    private onTileClicked() {
        if (this.onClickCallback && this.row >= 0 && this.col >= 0) {
            this.onClickCallback(this.row, this.col, this);
        }
    }

    public getRow(): number {
        return this.row;
    }

    public getCol(): number {
        return this.col;
    }

    // update (dt) {}
}
