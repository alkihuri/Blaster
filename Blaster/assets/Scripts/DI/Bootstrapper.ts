import { ServiceContainer } from './ServiceContainer';
import { GameManager } from '../Managers/GameManager';
import { BoardManager } from '../Managers/BoardManager';
import { ScoreManager } from '../Managers/ScoreManager';
import ManagerBase from '../Managers/ManagerBase';

 
const {ccclass, property} = cc._decorator;
@ccclass
export class Bootstrapper extends cc.Component {

    // listof managers to register 
    // reference in inspector to managers  
 

    protected start(): void {
        const container = Bootstrapper.init();
    }

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
