import BoardState from "../Core/BoardState";
import { TileType } from "../Core/TileType";

const { ccclass } = cc._decorator;

@ccclass
export default class BoardService {  
    
    private boardState: BoardState = null;

    constructor() {}
 
    public initializeBoard(boardState: BoardState) {
        this.boardState = boardState;
    }
 
    public getBoardState(): BoardState {
        return this.boardState;
    }
 
    public handleTileClick(row: number, col: number): BoardState {
        if (!this.boardState) {
            console.error("Board state not initialized");
            return null;
        }

        const tileType = this.boardState.getTileAt(row, col);
        if (tileType === TileType.None) {
            return null;
        }
 
        const tilesToRemove = this.findMatchingTiles(row, col, tileType);

        if (tilesToRemove.length === 0) {
            console.log("No matching tiles found");
            return null;
        }
 
        const newState = this.boardState.clone();
         
        for (let tile of tilesToRemove) {
            newState.setTileAt(tile.row, tile.col, TileType.None);
        }
 
        this.applyGravity(newState);
 
        this.fillEmptySpaces(newState);

        this.boardState = newState;
        return newState;
    }
 
    private findMatchingTiles(startRow: number, startCol: number, tileType: TileType): Array<{ row: number, col: number }> {
        const visited: boolean[][] = [];
        for (let i = 0; i < this.boardState.rows; i++) {
            visited[i] = [];
        }

        const result = [];
        this.floodFill(startRow, startCol, tileType, visited, result);
 
        if (result.length >= 3) {
            return result;
        }
        return [];
    }
 
    private floodFill(row: number, col: number, tileType: TileType, visited: boolean[][], result: Array<{ row: number, col: number }>) {
        
        if (row < 0 || row >= this.boardState.rows || col < 0 || col >= this.boardState.cols) {
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
}
