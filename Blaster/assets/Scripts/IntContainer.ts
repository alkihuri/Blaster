import { ContainerBase } from "./ContainerBase";

const { ccclass, property } = cc._decorator;


@ccclass("IntContainer")
export class IntContainer extends ContainerBase<number> {
    constructor(initialValue: number = 0) {
        super();
        this.Value = initialValue;
    }
}
