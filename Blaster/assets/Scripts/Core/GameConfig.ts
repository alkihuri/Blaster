import TileData from "../Core/TileData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameConfig extends cc.Component {

   @property
   public scorePerTile: number = 20;

   @property
   public targetScore = 1000;

   @property
   public gameMoves = 20;


   @property
   public boardRows: number = 8;

   @property
   public boardCols: number = 8;

   @property([TileData])
   public allowedTiles: TileData[] = [];

}

