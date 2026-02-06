// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class BoardViewController extends cc.Component {

protected onLoad(): void {
    this.GenrateBoard(8, 8); // Example: Generate an 8x8 board
}


@property(cc.Prefab)
cellPrefab: cc.Prefab = null;

    public   GenrateBoard(rows: number, cols: number) {
        for (let i = 0; i < rows; i++) {for (let j = 0; j < cols; j++) {
            const cell = cc.instantiate(this.cellPrefab);
            cell.setPosition(j * 50, i * 50); // Adjust position based on your cell size
            this.node.addChild(cell);
        }}
    }


}
