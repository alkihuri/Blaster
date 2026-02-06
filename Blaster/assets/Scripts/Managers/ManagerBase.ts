import { ServiceContainer } from "../DI/ServiceContainer";


const { ccclass } = cc._decorator;

@ccclass
export default class ManagerBase extends cc.Component {

    protected container: ServiceContainer = null;

    init(container: ServiceContainer) {
        this.container = container;
    }
}
