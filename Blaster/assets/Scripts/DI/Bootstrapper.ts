import { ServiceContainer } from './ServiceContainer';
import { GameManager } from '../Managers/GameManager';
import { BoardManager } from '../Managers/BoardManager';
import { ScoreManager } from '../Managers/ScoreManager';
import ManagerBase from '../Managers/ManagerBase';

export class Bootstrapper {

    // listof managers to register
    listOfManagers: ManagerBase[] = [];
    static init(): ServiceContainer {
        const container = new ServiceContainer();

        const boardManager = new BoardManager(container);
        const scoreManager = new ScoreManager(container);
        const gameManager = new GameManager(container);
 

        container.register('BoardManager', boardManager);
        container.register('ScoreManager', scoreManager);
        container.register('GameManager', gameManager);

        boardManager.init();
        scoreManager.init();
        gameManager.init();
         

        return container;
    }
}
