const {ccclass, property} = cc._decorator;

@ccclass
export default class GameConfig extends cc.Component {

   @property  
   boardRows: number = 8;

   @property  
   boardCols: number = 8;
}
