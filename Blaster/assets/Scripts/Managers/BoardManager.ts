import ManagerBase from './ManagerBase';

 
const {ccclass, property} = cc._decorator;
@ccclass
export class BoardManager extends ManagerBase {
    private rows: number = 0;
    private cols: number = 0;

    constructor(container?: any) {
        super(container);
    }

    init(): void {
        super.init();
    }

    setupBoard(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;
    }

    clearBoard() {
        this.rows = 0;
        this.cols = 0;
    }
}

export default BoardManager;
