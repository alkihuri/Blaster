
import { ServiceContainer } from '../DI/ServiceContainer';
import ManagerBase from './ManagerBase';
import GameConfig  from '../Core/GameConfig';
import BoardViewController from '../View/BoardViewController';

const { ccclass, property } = cc._decorator;

 @ccclass
export class BoardManager extends ManagerBase {

    @property({type: BoardViewController})
    public boardViewController :  BoardViewController = null;

    // object pool for board elements can be added here
    private config : GameConfig = null;

    start() {
        this.config = this.container.resolve<GameConfig>('GameConfig');
        // безопасно
    }

    public BuildUpBoard() { 
         this.config = this.container.resolve<GameConfig>('GameConfig');
        if(!this.config){
            console.error("GameConfig is not assigned in BoardManager");
        }
        if(this.boardViewController== null){
            console.error("BoardViewController is not assigned in BoardManager");
            return;
        }
        this.boardViewController.GenrateBoard(this.config);
    }



}
