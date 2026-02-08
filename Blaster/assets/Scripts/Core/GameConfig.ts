import TileData from "../Core/TileData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameConfig extends cc.Component {

   @property
   scorePerTile: number = 20;

   @property
   targetScore = 1000;

   @property
   gameSteps = 20;


   @property
   boardRows: number = 8;

   @property
   boardCols: number = 8;

   @property([TileData])
   public allowedTiles: TileData[] = [];

}

