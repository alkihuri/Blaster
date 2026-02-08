import GameConfig from '../Core/GameConfig';
import { ServiceContainer } from '../DI/ServiceContainer';
import { IntContainer } from '../IntContainer';
import { StateMachine } from '../States/StateMachine';
import ManagerBase from './ManagerBase';


const { ccclass, property } = cc._decorator;
@ccclass
export class ScoreManager extends ManagerBase {
    public score: IntContainer;


    private gameConfig: GameConfig = null;

    protected onLoad(): void {
        if (!this.score) {
            this.score = this.node.getComponent(IntContainer);
            if (!this.score) {
                console.error("ScoreManager requires an IntContainer component on the same node.");
            } else {
                this.score.setValue(0);
            }
        }
    }

    public init(container?: ServiceContainer): void {
        super.init(container); 
        if (!this.score) {
            this.score = this.node.getComponent(IntContainer);
        }
        if (!this.score) {
            console.error("ScoreManager requires an IntContainer component on the same node.");
        } else {
            this.score.setValue(0);
            this.gameConfig = this.container.resolve<GameConfig>('GameConfig');
        }
    }

    public add(points: number) {
        points = this.score.getValue() + (points* this.gameConfig.scorePerTile);
        this.score.setValue(points);

        if (this.score.getValue() >= this.gameConfig.targetScore) {
            console.log("Target score reached! You win!"); 
            this.container.resolve<StateMachine>("StateMachine").goWin()
        }

        console.log(`Score updated: ${this.score.getValue()}`);
    }

    public reset() {
        this.score.setValue(0);
    }
}

export default ScoreManager;
