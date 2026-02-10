// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import TileData from "../Core/TileData";
import { TileType } from "../Core/TileType";

const { ccclass, property } = cc._decorator;

export type TileClickCallback = (row: number, col: number, tile: TileViewController) => Promise<void> | void;

@ccclass
export default class TileViewController extends cc.Component {

    @property({ type: TileType })
    type: TileType = TileType.Red;

    public isClickable: boolean = true;

    @property(cc.Label)
    label: cc.Label = null;


    private row: number = -1;
    private col: number = -1;
    private onClickCallback: TileClickCallback = null;

    public setPosition(row: number, col: number, callback: TileClickCallback) {
        this.row = row;
        this.col = col;
        this.onClickCallback = callback;
    }

    public updateData(data: TileData) {

        this.label.string = data.type.toString();
        this.type = data.type;
        this.node.getComponent(cc.Sprite).spriteFrame = data.sprite;
        //console.log("TileViewController updated with type: " + this.type);  
    }
    protected onLoad(): void {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTileClicked.bind(this), this);
        this.label.node.color = cc.Color.WHITE; 
    }

    protected onDestroy(): void {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTileClicked.bind(this), this);
    }

    private async onTileClicked() {
        if (!this.isClickable) {
            return;
        }
        console.log(`onTileClicked enter [${this.row},${this.col}] at ${Date.now()}`);
        this.isClickable = false;
        this.label.node.color = cc.Color.RED;
        await new Promise(resolve => setTimeout(resolve, 100)); // Short delay to show click feedback
        this.label.node.color = cc.Color.WHITE;   
        if (this.onClickCallback && this.row >= 0 && this.col >= 0) {
            try {
                const result = this.onClickCallback(this.row, this.col, this);
                if (result instanceof Promise) {
                    await result;
                }
            } catch (err) {
                console.error("Tile click callback error:", err);
            } finally {
                this.isClickable = true;
                console.log(`onTileClicked exit [${this.row},${this.col}] ${this.type} at ${Date.now()}`);
            }
        } else {
            this.isClickable = true;
            console.log(`onTileClicked exit (no callback) [${this.row},${this.col}] at ${Date.now()}`);
        }
    }

    public getRow(): number {
        return this.row;
    }

    public getCol(): number {
        return this.col;
    }

    public async  BlinkColor(color: cc.Color) : Promise<void> {
        {
            this.label.node.color = color;
        }

         // shake scale animation
         
         cc.tween(this.node)
         .to(0.1, { scale: 1.1 })
         .to(0.1, { scale: 1 })
         .start();

        // delay to allow color change to be visible before any subsequent actions
        return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {     

            this.node.scale = 1;    

        this.label.node.color = cc.Color.WHITE; 
        }); 
    }

}
