const { ccclass, property } = cc._decorator;

@ccclass
export default class WinScreenController extends cc.Component {

    @property(cc.Node)
    public winScreenNode: cc.Node = null;


    @property(cc.Button)
    public restartButton: cc.Button = null;

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


    public subscribeToRestart(callback: () => void) {
        if (this.restartButton) {
            this.restartButton.node.on('click', callback);
        } else {
            console.error("WinScreenController requires a reference to the restart button.");
        }
    }
} 