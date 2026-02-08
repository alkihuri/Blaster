import GameConfig from '../Core/GameConfig';
import { ServiceContainer } from '../DI/ServiceContainer';
import { IntContainer } from '../IntContainer';
import { StateMachine } from '../States/StateMachine';
import ManagerBase from './ManagerBase';


const { ccclass, property } = cc._decorator;
@ccclass
export class ScoreManager extends ManagerBase {
    
    
    @property(IntContainer)
    public score: IntContainer;

    @property(IntContainer) 
    public moves: IntContainer;


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

        if (!this.moves) {
            this.moves = this.node.getComponent(IntContainer);
            if (!this.moves) {
                console.error("ScoreManager requires an IntContainer component for moves on the same node.");
            } else {
                this.moves.setValue(0);
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
            this.moves.setValue(this.gameConfig.gameMoves);
        }
    }

    public addPoints(points: number) {
        points = this.score.getValue() + (points* this.gameConfig.scorePerTile);
        this.score.setValue(points);

        if (this.score.getValue() >= this.gameConfig.targetScore) {
            console.log("Target score reached! You win!"); 
            this.container.resolve<StateMachine>("StateMachine").goWin()
        }

        console.log(`Score updated: ${this.score.getValue()}`);
    }

    public reduceMoves(count: number) {
        const remainingMoves = this.moves.getValue() - count;
        this.moves.setValue(remainingMoves);

        if (remainingMoves <= 0) {
            console.log("No moves left! Game Over!"); 
            this.container.resolve<StateMachine>("StateMachine").goLoose()
        }

        console.log(`Moves remaining: ${this.moves.getValue()}`);
    }

    public reset() {
        this.score.setValue(0);
        this.moves.setValue(this.gameConfig.gameMoves);
        console.log("Score and moves reset.");
    }
}

export default ScoreManager;
