// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainMenuController extends cc.Component {

    @property(cc.Label)
    shuffleCounterLabel: cc.Label = null;

    @property(cc.Label)
    boosterCounterLabel: cc.Label = null;


    @property(cc.Button)
    shiffleButton: cc.Button = null;

    @property(cc.Button)
    boosterButton: cc.Button = null;

    public updateShuffleCount(count: number) {
        if (this.shuffleCounterLabel) {
            this.shuffleCounterLabel.string = `${count}`;
        }
    }

    public updateBoosterCount(count: number) {
        if (this.boosterCounterLabel) {
            this.boosterCounterLabel.string = `${count}`;
        }
    }

    public subscribeToShuffleButton(callback: () => void) {
        if (this.shiffleButton) {
            this.shiffleButton.node.on(cc.Node.EventType.TOUCH_START, callback, this);
        }
    }

    public subscribeToBoosterButton(callback: () => void) {
        if (this.boosterButton) {
            this.boosterButton.node.on(cc.Node.EventType.TOUCH_START, callback, this);
        }
    }   

    // LIFE-CYCLE CALLBACKS:
}
