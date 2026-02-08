import UIManager from "../Managers/UIManager";
import { StateBase } from "./StateBase";



export class WinState extends StateBase {

    update(dt: number): void {
    }

    onEnter(): void {
        console.log('[WinState] enter');
        this.game.resolve<UIManager>('UIManager').showWinScreen();
        // Here you can add logic to display a win screen, show score, etc.
    }

    onExit(): void {
        console.log('[WinState] exit');
        // Clean up win screen, reset score, etc. if needed.        
    }
}
