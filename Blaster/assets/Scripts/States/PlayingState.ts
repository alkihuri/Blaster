import { StateBase } from "./StateBase";
import { ServiceContainer } from "../DI/ServiceContainer";
import { GameManager } from "../Managers/GameManager";
import { ScoreManager } from "../Managers/ScoreManager";
import { BoardManager } from "../Managers/BoardManager";



export class PlayingState extends StateBase {

  

    update(dt: number): void { 
        
    } 

    onEnter(): void {
        console.log('[PlayingState] enter');
  
        this.game.resolve<GameManager>('GameManager').startGame();
        
        this.game.resolve<ScoreManager>('ScoreManager').moves.setValue(this.game.config.gameMoves);
        
        
        
    }

    onExit(): void {

        this.game.resolve<GameManager>('GameManager').endGame();
        console.log('[PlayingState] exit');
    }
}
