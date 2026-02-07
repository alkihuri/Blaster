import { ContainerBase } from "./ContainerBase";

const { ccclass, property } = cc._decorator;


@ccclass
export class BoolContainer extends ContainerBase<boolean> {
    constructor(initialValue: boolean = false) {
        super();
        this.Value = initialValue;
    }
}
