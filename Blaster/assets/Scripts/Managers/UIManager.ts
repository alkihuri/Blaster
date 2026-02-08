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
import GameConfig from "../Core/GameConfig";
import GameManager from "./GameManager";
import MainMenuController from "../View/MainMenuController";
import { BoardManager } from "./BoardManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIManager extends ManagerBase {

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Label)
    movesLabel: cc.Label = null;


    @property(cc.Label)
    shuffleCountLabel: cc.Label = null;

    @property(cc.Label)
    boosterCountLabel: cc.Label = null;


    @property(WinScreenController)
    winScreen: WinScreenController = null;


    //// TBD MOVE EVERYTHIN HERE INTO MAINMENUCONTROLLER
    @property(MainMenuController)
    mainMenu: MainMenuController = null;



    private scoreManager: ScoreManager = null;
    private gameConfig: GameConfig = null;

    init(container?: ServiceContainer): void {


        super.init(container);

        this.gameConfig = this.container.resolve<GameConfig>('GameConfig');
        if (!this.gameConfig) {
            console.error("GameConfig is not assigned in UIManager");
            return;
        }

        try {
            this.scoreManager = this.container.resolve<ScoreManager>('ScoreManager');
            if (this.scoreManager && this.scoreManager.score) {
                this.scoreManager.score.onValueChanged = (newScore: number) => {
                    this.updateScore(newScore);
                }
                console.log("UIManager started and subscribed to score changes");
            } else {
                console.warn("ScoreManager or its score property not yet initialized");
            }


            if (this.scoreManager && this.scoreManager.moves) {
                this.scoreManager.moves.onValueChanged = (newMoves: number) => {
                    this.updateMoves(newMoves);
                }
                console.log("UIManager started and subscribed to moves changes");
            } else {
                console.warn("ScoreManager or its moves property not yet initialized");
            }

        } catch (err) {
            console.warn("Failed to resolve ScoreManager in UIManager.init:", err);
        }

        if (!this.winScreen) {
            console.error("WinScreenController is not assigned in UIManager");
            return;
        }



        try {
            this.container.resolve<GameManager>('GameManager').shuffleCount.onValueChanged = (newShuffleCount: number) => {
                if (this.shuffleCountLabel) {
                    this.shuffleCountLabel.string = newShuffleCount.toString();
                } else {
                    console.error("Shuffle count label is not assigned in UIManager");
                }
            }

            this.container.resolve<GameManager>('GameManager').boosterCount.onValueChanged = (newBoosterCount: number) => {
                if (this.boosterCountLabel) {
                    this.boosterCountLabel.string = newBoosterCount.toString();
                } else {
                    console.error("Booster count label is not assigned in UIManager");

                }
            }
        } catch (err) {
            console.warn("Failed to resolve GameManager or its properties in UIManager.init:", err);
        }


        this.mainMenu.subscribeToShuffleButton(() => {
             this.container.resolve<BoardManager>('BoardManager').BuildUpBoard();
        });

        this.winScreen.subscribeToRestart(() => {
            this.container.resolve<StateMachine>("StateMachine").goPlaying();
        });
    }


    public updateScore(score: number) {
        if (this.scoreLabel) {
            this.scoreLabel.string = `ОЧКИ:\n ${score}/${this.gameConfig.targetScore}`;
        } else {
            console.error("Score label is not assigned in UIManager");
        }
    }

    public updateMoves(moves: number) {
        if (this.movesLabel) {
            this.movesLabel.string = moves.toString();
        } else {
            console.error("Moves label is not assigned in UIManager");
        }
    }

    public updateShuffleCount(count: number) {
        if (this.shuffleCountLabel) {
            this.shuffleCountLabel.string = `${count}`;
        } else {
            console.error("Shuffle count label is not assigned in UIManager");
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

    public showLooseScreen() {
        console.log("Showing loose screen");
        if (this.winScreen) {
            this.winScreen.showLooseScreen();
        }
        else {
            console.error("WinScreenController is not assigned in UIManager");
        }
    }

    public hideLooseScreen() {
        console.log("Hiding loose screen");
        if (this.winScreen) {
            this.winScreen.hideLooseScreen();
        }
        else {
            console.error("WinScreenController is not assigned in UIManager");
        }
    }
}
