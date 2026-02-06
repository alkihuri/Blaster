
import { ServiceContainer } from './ServiceContainer';
import { BoardManager } from '../Managers/BoardManager';
import { ScoreManager } from '../Managers/ScoreManager';
import { GameManager } from '../Managers/GameManager';
import  GameConfig from '../Core/GameConfig';
import { StateMachine } from '../States/StateMachine';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Bootstrapper extends cc.Component {

    @property(GameConfig)
    gameConfig: GameConfig = null;

    @property(BoardManager)
    boardManager: BoardManager = null;

    @property(ScoreManager)
    scoreManager: ScoreManager = null;

    @property(GameManager)
    gameManager: GameManager = null;

    @property(StateMachine)
    stateMachine: StateMachine = null;

    start() {
        const container = new ServiceContainer(this.gameConfig);

        container.register('GameConfig', this.gameConfig);
        container.register('BoardManager', this.boardManager);
        container.register('ScoreManager', this.scoreManager);
        container.register('GameManager', this.gameManager);

        this.boardManager.init(container);
        this.scoreManager.init(container);
        this.gameManager.init(container);

        this.stateMachine.InjectContainer(container);
    }
}
