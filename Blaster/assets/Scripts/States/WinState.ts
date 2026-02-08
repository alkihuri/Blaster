import ScoreManager from "../Managers/ScoreManager";
import UIManager from "../Managers/UIManager";
import { StateBase } from "./StateBase";



export class WinState extends StateBase {

    update(dt: number): void {
    }

    onEnter(): void {
        console.log('[WinState] enter');
        this.game.resolve<UIManager>('UIManager').showWinScreen(); 
    }

    onExit(): void {
        console.log('[WinState] exit');       
        this.game.resolve<UIManager>('UIManager').hideWinScreen(); 
        this.game.resolve<ScoreManager>('ScoreManager').reset();
    }
}



