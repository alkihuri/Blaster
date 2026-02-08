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

        this.score.setValue(0);  
    }

    public init(container?: ServiceContainer): void {
        super.init(container);
    }

    public add(points: number) {
        points = this.score.getValue() + points;
        this.score.setValue(points);
        console.log(`Score updated: ${this.score.getValue()}`);
    }

    public reset() {
        this.score.setValue(0);
    } 
}

export default ScoreManager;
