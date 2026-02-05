import ManagerBase from './ManagerBase';

 
const {ccclass, property} = cc._decorator;
@ccclass
export class ScoreManager extends ManagerBase {
    private score: number = 0;

    constructor(container?: any) {
        super(container);
    }

    init(): void {
        super.init();
    }

    add(points: number) {
        this.score += points;
    }

    reset() {
        this.score = 0;
    }

    getScore(): number {
        return this.score;
    }
}

export default ScoreManager;
