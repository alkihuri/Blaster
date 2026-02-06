import { TileType } from "./TileType";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TileData {

      @property({type:TileType})
      type: TileType =  TileType.Red;  

      @property(cc.SpriteFrame)
      sprite: cc.SpriteFrame = null;

}


