import { ServiceContainer } from '../DI/ServiceContainer';
import { BoardManager } from './BoardManager';
import ManagerBase from './ManagerBase';
import ScoreManager from './ScoreManager';

 
const {ccclass, property} = cc._decorator;
@ccclass
export class GameManager extends ManagerBase {
    private boardManager: BoardManager = null;
    private scoreManager: ScoreManager = null;

 

      init(container?: ServiceContainer): void {
           super.init(container);

           // cash 
           this.boardManager = this.container.resolve<BoardManager>('BoardManager');
           if (!this.boardManager) {
               console.error("BoardManager is not available in GameManager.init");
           }

           this.scoreManager = this.container.resolve<ScoreManager>('ScoreManager');
           if (!this.scoreManager) {
               console.error("ScoreManager is not available in GameManager.init");
           }
       }

    startGame() {
         this.boardManager.BuildUpBoard();
    }

    endGame() {
        this.boardManager.ClearBoard();
        //this.scoreManager.reset();
    }
}

export default GameManager;
