import { StateBase } from "./StateBase";
import { ServiceContainer } from "../DI/ServiceContainer";
import { GameManager } from "../Managers/GameManager";
import { ScoreManager } from "../Managers/ScoreManager";



export class PlayingState extends StateBase {


    update(dt: number): void {
        throw new Error("Method not implemented.");
    }
    constructor(container: ServiceContainer) {
        super(container);
    } 

    onEnter(): void {
        console.log('[PlayingState] enter');
  

        
        
    }

    onExit(): void {
        console.log('[PlayingState] exit');
    }
}
