import { ContainerBase } from "./ContainerBase";

const { ccclass, property } = cc._decorator;


@ccclass
export class StringContainer extends ContainerBase<string> {
    constructor(initialValue: string = "") {
        super();
        this.setValue(initialValue);
    }
}
