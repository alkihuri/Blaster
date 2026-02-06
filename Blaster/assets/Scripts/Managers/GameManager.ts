import { ServiceContainer } from '../DI/ServiceContainer';
import ManagerBase from './ManagerBase';

 
const {ccclass, property} = cc._decorator;
@ccclass
export class GameManager extends ManagerBase {
    private boardManager: any = null;
    private scoreManager: any = null;

 

      init(container?: ServiceContainer): void {
           super.init(container);
       }

    startGame() {
        if (this.boardManager && this.boardManager.setupBoard) {
            this.boardManager.setupBoard(8, 8);
        }
        if (this.scoreManager && this.scoreManager.reset) {
            this.scoreManager.reset();
        }
    }

    endGame() {
        if (this.boardManager && this.boardManager.clearBoard) {
            this.boardManager.clearBoard();
        }
    }
}

export default GameManager;
