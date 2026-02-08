import ScoreManager from "../Managers/ScoreManager";
import UIManager from "../Managers/UIManager";
import { StateBase } from "./StateBase";



export class LooseState extends StateBase {

    update(dt: number): void {
    }

    onEnter(): void {
        console.log('[LooseState] enter');
        this.game.resolve<UIManager>('UIManager').showLooseScreen();
        this.game.resolve<ScoreManager>('ScoreManager').reset();
    }

    onExit(): void {
        console.log('[LooseState] exit');
        this.game.resolve<UIManager>('UIManager').hideLooseScreen();
        this.game.resolve<ScoreManager>('ScoreManager').reset();
    }
}
