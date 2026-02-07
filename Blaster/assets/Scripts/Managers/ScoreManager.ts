import { ServiceContainer } from '../DI/ServiceContainer';
import { IntContainer } from '../IntContainer';
import ManagerBase from './ManagerBase';

 
const {ccclass, property} = cc._decorator;
@ccclass
export class ScoreManager extends ManagerBase {
    public  score: IntContainer;

    protected onLoad(): void {
        if (!this.score) {
            this.score = this.node.getComponent(IntContainer);
        }

        if (!this.score) {
            console.error("ScoreManager requires an IntContainer component on the same node.");
        }

        this.score.Value = 0; // Initialize score to 0
    }

    init(container?: ServiceContainer): void {
        super.init(container);
    }

    add(points: number) {
        points = this.score.Value + points;
        this.score.setValue(points);
        console.log(`Score updated: ${this.score.Value}`);
    }

    reset() {
        this.score.Value = 0;
    } 
}

export default ScoreManager;
