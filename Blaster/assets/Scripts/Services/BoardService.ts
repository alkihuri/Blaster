import BoardState from "../Core/BoardState";
import { TileType } from "../Core/TileType";
import BoosterService from "./BoosterService";

const { ccclass } = cc._decorator;

@ccclass
export default class BoardService {  
    
    private boardState: BoardState = null;
    private boosterService: BoosterService = new BoosterService();

    constructor() {}
 
    public initializeBoard(boardState: BoardState) {
        this.boardState = boardState;
    }
 
    public getBoardState(): BoardState {
        return this.boardState;
    }
 
    public async handleTileClick(row: number, col: number): Promise<BoardState> {
        if (!this.boardState) {
            console.error("Board state not initialized");
            return null;
        }

        if (row < 0 || row >= this.boardState.rows || col < 0 || col >= this.boardState.cols) {
            console.warn(`Tile click out of bounds: [${row}, ${col}]`);
            return null;
        }

        const tileType = this.boardState.getTileAt(row, col);
        if (tileType === null || tileType === TileType.None) {
            return null;
        } 
        
        if (this.boosterService.isBooster(tileType)) {
            console.log("Booster tile clicked");
            return this.handleBoosterClick(row, col);
        }
 
        const tilesToRemove = this.findMatchingTiles(row, col, tileType);

        if (tilesToRemove.length === 0) {
            console.log("No matching tiles found");
            return null;
        }

        const newState = this.boardState.clone();
        newState.wasRemove = tilesToRemove;
         
        for (let tile of tilesToRemove) {
            newState.setTileAt(tile.row, tile.col, TileType.None);
        }
 
        this.applyGravity(newState);
        this.fillEmptySpaces(newState);

        this.boardState = newState;
        return newState;
    }
 
    private findMatchingTiles(startRow: number, startCol: number, tileType: TileType): Array<{ row: number, col: number }> {
        if (!this.boardState) {
            return [];
        }

        if (startRow < 0 || startRow >= this.boardState.rows || startCol < 0 || startCol >= this.boardState.cols) {
            return [];
        }

        const visited: boolean[][] = [];
        for (let i = 0; i < this.boardState.rows; i++) {
            visited[i] = [];
            for (let j = 0; j < this.boardState.cols; j++) {
                visited[i][j] = false;
            }
        }

        const result = [];
        this.floodFill(startRow, startCol, tileType, visited, result);
 
        if (result.length >= 2) {
            return result;
        }
        return [];
    }
 
    private floodFill(row: number, col: number, tileType: TileType, visited: boolean[][], result: Array<{ row: number, col: number }>) {
        if (!this.boardState) {
            return;
        }

         
        if (visited[row][col]) {
            return;
        }
 
        if (this.boardState.getTileAt(row, col) !== tileType) {
            return;
        }
 
        visited[row][col] = true;
        result.push({ row, col });
 
        this.floodFill(row - 1, col, tileType, visited, result); // up
        this.floodFill(row + 1, col, tileType, visited, result); // down
        this.floodFill(row, col - 1, tileType, visited, result); // left
        this.floodFill(row, col + 1, tileType, visited, result); // right
    }
 
    private applyGravity(state: BoardState) {
        for (let col = 0; col < state.cols; col++) {
            let writePos = state.rows - 1;
            
            for (let row = state.rows - 1; row >= 0; row--) {
                const tileType = state.getTileAt(row, col);
                if (tileType !== TileType.None) {
                    state.setTileAt(writePos, col, tileType);
                    if (writePos !== row) {
                        state.setTileAt(row, col, TileType.None);
                    }
                    writePos--;
                }
            }
        }
    }
 
    private fillEmptySpaces(state: BoardState) {
        for (let row = 0; row < state.rows; row++) {
            for (let col = 0; col < state.cols; col++) {
                if (state.getTileAt(row, col) === TileType.None) {
                    const randomTile = state.allowedTiles[Math.floor(Math.random() * state.allowedTiles.length)];
                    state.setTileAt(row, col, randomTile.type);
                }
            }
        }
    }

   
    private handleBoosterClick(row: number, col: number, radius: number = 1): BoardState {
        console.log(`Booster activated at [${row}, ${col}] with radius ${radius}`);
        
        let newState = this.boosterService.activateBooster(this.boardState, row, col, radius);
        
        if (!newState) {
            console.error("Failed to activate booster");
            return null;
        }
 
        this.applyGravity(newState);
        this.fillEmptySpaces(newState);

        this.boardState = newState;
        return newState;
    }
 
    public handleLineBoosterClick(row: number, col: number): BoardState {
        if (!this.boardState) {
            console.error("Board state not initialized");
            return null;
        }

        console.log(`Line Booster activated at [${row}, ${col}]`);
        
        let newState = this.boosterService.activateLineBooster(this.boardState, row, col);
        
        if (!newState) {
            console.error("Failed to activate line booster");
            return null;
        }

        this.applyGravity(newState);
        this.fillEmptySpaces(newState);

        this.boardState = newState;
        return newState;
    }

   
    public handleExplosionBoosterClick(row: number, col: number, explosionRadius: number = 2): BoardState {
        if (!this.boardState) {
            console.error("Board state not initialized");
            return null;
        }

        console.log(`Explosion Booster activated at [${row}, ${col}] with radius ${explosionRadius}`);
        
        let newState = this.boosterService.activateExplosionBooster(this.boardState, row, col, explosionRadius);
        
        if (!newState) {
            console.error("Failed to activate explosion booster");
            return null;
        }

        this.applyGravity(newState);
        this.fillEmptySpaces(newState);

        this.boardState = newState;
        return newState;
    } 

    public calculateScore(state: BoardState): number {
        const tilesRemoved = state.wasRemove.length; 
        // TBD надо добавить верифиакцию что tilesRemoved корректно заполнен
        return tilesRemoved;
    }
}
