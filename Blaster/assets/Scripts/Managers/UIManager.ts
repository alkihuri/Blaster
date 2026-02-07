// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ManagerBase from "./ManagerBase";
import ScoreManager from "./ScoreManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIManager extends ManagerBase {

    @property(cc.Label)
    label: cc.Label = null;

    
    protected start(): void {
        this.container.resolve<ScoreManager>('ScoreManager').score.onValueChanged = (newScore : number) => {
            this.updateScore(newScore);
        }
        console.log("UIManager started and subscribed to score changes");

        this.container.resolve<ScoreManager>('ScoreManager').add(1); // Test score update   
    }


    public updateScore(score: number) {
        if (this.label) {
            this.label.string = `Score: ${score}`;
        } else {
            console.error("Score label is not assigned in UIManager");
        }
    }
}
