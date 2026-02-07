const { ccclass, property } = cc._decorator;

@ccclass
export class ContainerBase<T> extends cc.Component {

    private Value: T;

    public onValueChanged: (newValue: T) => void = null;

    public setValue(newValue: T) {
        this.Value = newValue;
        if (this.onValueChanged) {
            this.onValueChanged(newValue);
        }
    }

    public getValue(): T {
        return this.Value;
    }   
}


