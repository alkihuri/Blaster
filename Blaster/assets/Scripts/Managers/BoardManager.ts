
import { ServiceContainer } from '../DI/ServiceContainer';
import ManagerBase from './ManagerBase';
import GameConfig from '../Core/GameConfig';
import BoardViewController from '../View/BoardViewController';
import BoardService from '../Services/BoardService';
import BoardState from '../Core/BoardState';
import ScoreManager from './ScoreManager';

const { ccclass, property } = cc._decorator;

@ccclass
export class BoardManager extends ManagerBase {

    @property({ type: BoardViewController })
    public boardViewController: BoardViewController = null;

    private config: GameConfig = null;
    private boardService: BoardService = null;
    private boardState: BoardState = null;
    private isAnimating: boolean = false;

    private scoremanager: ScoreManager = null;

    protected onLoad(): void {
         
    }

    public init(container: any): void {
        super.init(container);
        try {
            this.scoremanager = this.container.resolve<ScoreManager>('ScoreManager');
        } catch (err) {
            console.warn('ScoreManager not available during BoardManager.init:', err);
            this.scoremanager = null;
        }
    }

    start() {
        this.config = this.container.resolve<GameConfig>('GameConfig');

        if (!this.config) {
            console.error("GameConfig is not assigned in BoardManager");
        }
        if (this.boardViewController == null) {
            console.error("BoardViewController is not assigned in BoardManager");
        }
    }

    public BuildUpBoard() {
        this.config = this.container.resolve<GameConfig>('GameConfig');
        if (!this.config) {
            console.error("GameConfig is not assigned in BoardManager");
            return;
        }
        if (this.boardViewController == null) {
            console.error("BoardViewController is not assigned in BoardManager");
            return;
        }

        if (!this.boardService) {
            this.boardService = new BoardService();
            this.container.register<BoardService>('BoardService', this.boardService);
        }

        this.boardState = new BoardState(this.config.boardRows, this.config.boardCols, this.config.allowedTiles);
        this.boardState.initialize(this.config.allowedTiles);

        this.boardService.initializeBoard(this.boardState);

        this.boardViewController.setTileClickCallback(this.onTileClicked.bind(this));

        this.boardViewController.GenrateBoard(this.config);
    }


    private async onTileClicked(row: number, col: number) {
        await this.onTileClickedInternal(row, col);
    }

    private async onTileClickedInternal(row: number, col: number) {
        if (this.isAnimating) {
            console.log("Animation in progress, click ignored");
            return;
        }


        console.log(`Tile clicked at [${row}, ${col}]`);
        this.isAnimating = true;

        const oldState = this.boardState.clone();

        const newState = this.boardService.handleTileClick(row, col);

        if (newState) {
            console.log("Board state updated, rendering changes...");
            this.boardState = newState; 
            await this.boardViewController.updateBoardFromState(oldState, newState);
            const scoreGained = this.boardService.calculateScore(newState);
            this.scoremanager.add(scoreGained); 
        } else {
            console.log("No matching tiles for this position");
        }

        this.isAnimating = false;
    }

}

