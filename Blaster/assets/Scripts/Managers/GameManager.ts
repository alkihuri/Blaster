import ManagerBase from './ManagerBase';

 
const {ccclass, property} = cc._decorator;
@ccclass
export class GameManager extends ManagerBase {
    private boardManager: any = null;
    private scoreManager: any = null;

    constructor(container?: any) {
        super(container);
    }

    init(): void {
        super.init();
        try {
            if (this.container && this.container.resolve) {
                this.boardManager = this.container.resolve('BoardManager');
                this.scoreManager = this.container.resolve('ScoreManager');
            }
        } catch (e) {
        }
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
