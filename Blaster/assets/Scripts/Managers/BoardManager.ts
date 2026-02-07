
import { ServiceContainer } from '../DI/ServiceContainer';
import ManagerBase from './ManagerBase';
import GameConfig  from '../Core/GameConfig';
import BoardViewController from '../View/BoardViewController';
import BoardService from '../Services/BoardService';
import BoardState from '../Core/BoardState';

const { ccclass, property } = cc._decorator;

 @ccclass
export class BoardManager extends ManagerBase {

    @property({type: BoardViewController})
    public boardViewController :  BoardViewController = null;
 
    private config : GameConfig = null;
    private boardService: BoardService = null;
    private boardState: BoardState = null;

    start() {
        this.config = this.container.resolve<GameConfig>('GameConfig');
         
        this.boardService = new BoardService();
        this.container.register<BoardService>('BoardService', this.boardService);
        
        if(!this.config){
            console.error("GameConfig is not assigned in BoardManager");
        }
        if(this.boardViewController == null){
            console.error("BoardViewController is not assigned in BoardManager");
            return;
        }
         
        this.boardViewController.setTileClickCallback(this.onTileClicked.bind(this));
    }

    public BuildUpBoard() { 
        this.config = this.container.resolve<GameConfig>('GameConfig');
        if(!this.config){
            console.error("GameConfig is not assigned in BoardManager");
            return;
        }
        if(this.boardViewController == null){
            console.error("BoardViewController is not assigned in BoardManager");
            return;
        }
 
        if(!this.boardService) {
            this.boardService = new BoardService();
            this.container.register<BoardService>('BoardService', this.boardService);
        }
 
        this.boardState = new BoardState(this.config.boardRows, this.config.boardCols, this.config.allowedTiles);
        this.boardState.initialize(this.config.allowedTiles);
         
        this.boardService.initializeBoard(this.boardState);
         
        this.boardViewController.setTileClickCallback(this.onTileClicked.bind(this));
         
        this.boardViewController.GenrateBoard(this.config);
    }

    private onTileClicked(row: number, col: number) {
        console.log(`Tile clicked at [${row}, ${col}]`);
         
        const newState = this.boardService.handleTileClick(row, col);
        
        if(newState) {
            console.log("Board state updated, rendering changes...");
            this.boardViewController.updateBoardFromState(newState);
        } else {
            console.log("No matching tiles for this position");
        }
    }

}

