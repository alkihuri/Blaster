const { ccclass, property } = cc._decorator;

@ccclass
export default class WinScreenController extends cc.Component {

    @property(cc.Node)
    public winScreenNode: cc.Node = null;


    @property(cc.Button)
    public restartButton: cc.Button = null;


    @property(cc.Sprite)
    public background: cc.Sprite = null;

    protected onLoad(): void {
        if (this.winScreenNode) {
            this.winScreenNode.active = false;
        } else {
            console.error("WinScreenController requires a reference to the win screen node.");
        } 

        if(!this.background) {
            console.error("WinScreenController requires a reference to the background sprite.");
        }
    }

    public showWinScreen() {
        if(this.background) {
            this.background.node.color = cc.Color.GREEN;
        }   
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

    public showLooseScreen() {
        if (this.background) {
            this.showWinScreen();

            this.background.node.color = cc.Color.RED;
        } else {
            console.error("WinScreenController requires a reference to the background sprite.");
        }
    }

public hideLooseScreen() {
        if (this.background) {
            this.hideWinScreen();

            this.background.node.color = cc.Color.RED; // HArDCODE
        } else {
            console.error("WinScreenController requires a reference to the background sprite.");
        }
    }   

} 