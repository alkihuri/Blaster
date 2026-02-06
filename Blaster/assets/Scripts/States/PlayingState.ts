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
  
        this.game.resolve<BoardManager>('BoardManager').BuildUpBoard();
        
        
    }

    onExit(): void {
        console.log('[PlayingState] exit');
    }
}
