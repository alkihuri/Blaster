
import { ServiceContainer } from '../DI/ServiceContainer';
import ManagerBase from './ManagerBase';
import GameConfig  from '../Core/GameConfig';

const { ccclass, property } = cc._decorator;

 @ccclass
export class BoardManager extends ManagerBase {

    start() {
        const config = this.container.resolve<GameConfig>('GameConfig');
        // безопасно
    }
}
