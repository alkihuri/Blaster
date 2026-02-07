import TileData from "./TileData";
import { TileType } from "./TileType";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BoardState {
    public grid: TileType[][] = [];
    public rows: number;
    public cols: number;
    public allowedTiles: TileData[];

    constructor(rows: number = 8, cols: number = 8, allowedTiles: TileData[] = []) {
        this.rows = rows;
        this.cols = cols;
        this.allowedTiles = allowedTiles;
        this.grid = [];
    }
 
    public initialize(tileDataArray: TileData[]) {
        this.grid = [];
        for (let i = 0; i < this.rows; i++) {
            const row: TileType[] = [];
            for (let j = 0; j < this.cols; j++) {
                const randomTile = tileDataArray[Math.floor(Math.random() * tileDataArray.length)];
                row.push(randomTile.type);
            }
            this.grid.push(row);
        }
    }
 
    public getTileAt(row: number, col: number): TileType | null {
        if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
            return this.grid[row][col];
        }
        return null;
    }
 
    public setTileAt(row: number, col: number, type: TileType) {
        if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
            this.grid[row][col] = type;
        }
    }
 
    public getTileDataByType(type: TileType): TileData | null {
        for (let tile of this.allowedTiles) {
            if (tile.type === type) {
                return tile;
            }
        }
        return null;
    }
 
    public clone(): BoardState {
        const newState = new BoardState(this.rows, this.cols, this.allowedTiles);
        newState.grid = this.grid.map(row => [...row]);
        return newState;
    }
}
