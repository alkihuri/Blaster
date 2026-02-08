const { ccclass, property } = cc._decorator;

@ccclass
export default class WinScreenController extends cc.Component {

    @property(cc.Node)
    public winScreenNode: cc.Node = null;

    protected onLoad(): void {
        if (this.winScreenNode) {
            this.winScreenNode.active = false;
        } else {
            console.error("WinScreenController requires a reference to the win screen node.");
        }
    }

    public showWinScreen() {
        if (this.winScreenNode) {
            this.winScreenNode.active = true;
        }
    }

    public hideWinScreen() {
        if (this.winScreenNode) {
            this.winScreenNode.active = false;
        } else {
            console.error("WinScreenController requires a reference to the win screen node.");
        }
    }
} 