// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import TileData from "../Core/TileData";
import { TileType } from "../Core/TileType";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TileViewController extends cc.Component {

    @property({type:TileType})
    type: TileType =  TileType.Red;

    public updateData(data : TileData) {
        
        this.type = data.type;
        this.node.getComponent(cc.Sprite).spriteFrame = data.sprite;    
        console.log("TileViewController updated with type: " + this.type);  
    }

    // update (dt) {}
}
