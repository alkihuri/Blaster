// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import WinScreenController from "../View/WinScreenController";
import ManagerBase from "./ManagerBase";
import ScoreManager from "./ScoreManager";
import { ServiceContainer } from "../DI/ServiceContainer";
import { StateMachine } from "../States/StateMachine";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIManager extends ManagerBase {

    @property(cc.Label)
    label: cc.Label = null;


    @property(WinScreenController)
    winScreen: WinScreenController = null;


    init(container?: ServiceContainer): void {
        super.init(container);
        try {
            const scoreManager = this.container.resolve<ScoreManager>('ScoreManager');
            if (scoreManager && scoreManager.score) {
                scoreManager.score.onValueChanged = (newScore: number) => {
                    this.updateScore(newScore);
                }
                console.log("UIManager started and subscribed to score changes");
            } else {
                console.warn("ScoreManager or its score property not yet initialized");
            }
        } catch (err) {
            console.warn("Failed to resolve ScoreManager in UIManager.init:", err);
        }

        if (!this.winScreen) {
            console.error("WinScreenController is not assigned in UIManager");
            return;
        }

        this.winScreen.subscribeToRestart(() => {
            this.container.resolve<StateMachine>("StateMachine").goPlaying(); 
        });
    }


    public updateScore(score: number) {
        if (this.label) {
            this.label.string = `Score: ${score}`;
        } else {
            console.error("Score label is not assigned in UIManager");
        }
    }

    public showWinScreen() {
        if (this.winScreen) {
            this.winScreen.showWinScreen();
        }
        else {
            console.error("WinScreenController is not assigned in UIManager");
        }
    }

    public hideWinScreen() {
        if (this.winScreen) {
            this.winScreen.hideWinScreen();
        }
        else {
            console.error("WinScreenController is not assigned in UIManager");
        }
    }
}
