 @ccclass
export class BoardManager extends ManagerBase {

    start() {
        const config = this.container.resolve<GameConfig>('GameConfig');
        // безопасно
    }
}
