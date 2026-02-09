import { ServiceContainer } from '../DI/ServiceContainer';
import { IntContainer } from '../IntContainer';
import { BoardManager } from './BoardManager';
import ManagerBase from './ManagerBase';
import ScoreManager from './ScoreManager';
import GameConfig from '../Core/GameConfig';    
import UIManager from './UIManager';

 
const {ccclass, property} = cc._decorator;
@ccclass
export class GameManager extends ManagerBase {
    private boardManager: BoardManager = null;
    private scoreManager: ScoreManager = null;


    public isBoosterMode : boolean = false; // HARDCODE FLAG
 

    @property(IntContainer)
    public shuffleCount: IntContainer = null;

    @property(IntContainer)
    public boosterCount: IntContainer = null;

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

           if(!this.shuffleCount || !this.boosterCount  ) {
               console.error("GameManager initialization failed due to missing dependencies");
           }

           this.shuffleCount.setValue(this.container.resolve<GameConfig>('GameConfig').shuffleCount);
           this.boosterCount.setValue(this.container.resolve<GameConfig>('GameConfig').bosterCount);
       }


    public MinusShuffle() { 
        if(this.shuffleCount.getValue() > 0) {
            this.shuffleCount.setValue(this.shuffleCount.getValue() - 1);
            if(this.shuffleCount.getValue() === 0) {
                this.container.resolve<UIManager>('UIManager').mainMenu.disableShuffleButton();
            }   
        } else {
            console.warn("No shuffles left!");
        }
    }

     public MinusBooster() {
        if(this.boosterCount.getValue() > 0) {
            this.boosterCount.setValue(this.boosterCount.getValue() - 1);
        } else {
            console.warn("No boosters left!");
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
