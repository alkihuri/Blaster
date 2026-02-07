import { ServiceContainer } from '../DI/ServiceContainer';
import { IntContainer } from '../IntContainer';
import ManagerBase from './ManagerBase';

 
const {ccclass, property} = cc._decorator;
@ccclass
export class ScoreManager extends ManagerBase {
    private score: IntContainer;

    protected onLoad(): void {
        if (!this.score) {
            this.score = this.node.getComponent(IntContainer);
        }
    }

    init(container?: ServiceContainer): void {
        super.init(container);
    }

    add(points: number) {
        this.score.Value += points;
    }

    reset() {
        this.score.Value = 0;
    }

    getScore(): number {
        return this.score.Value;
    }
}

export default ScoreManager;
