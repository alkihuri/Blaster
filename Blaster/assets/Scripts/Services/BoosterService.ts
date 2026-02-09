import BoardState from "../Core/BoardState";
import { TileType } from "../Core/TileType";

const { ccclass } = cc._decorator;

@ccclass
export default class BoosterService {

    constructor() {}

    
    public isBooster(tileType: TileType): boolean {

        console.log("comparing : " + tileType)
        return tileType === TileType.Booster;
    }

   
    public activateBooster(
        state: BoardState,
        centerRow: number,
        centerCol: number,
        radius: number = 1
    ): BoardState {
         
        if (state.getTileAt(centerRow, centerCol) !== TileType.Booster) {
            console.warn("Selected tile is not a booster");
            return null;
        }

        const newState = state.clone();
        const affectedTiles: Array<{ row: number, col: number }> = [];
 
        for (let row = Math.max(0, centerRow - radius); row <= Math.min(newState.rows - 1, centerRow + radius); row++) {
            for (let col = Math.max(0, centerCol - radius); col <= Math.min(newState.cols - 1, centerCol + radius); col++) {
                const tileType = newState.getTileAt(row, col);
                if (tileType !== TileType.None) {
                    affectedTiles.push({ row, col });
                    newState.setTileAt(row, col, TileType.None);
                }
            }
        }

        newState.wasRemove = affectedTiles;
        return newState;
    }

    
    public activateLineBooster(
        state: BoardState,
        centerRow: number,
        centerCol: number
    ): BoardState {
        
        if (state.getTileAt(centerRow, centerCol) !== TileType.Booster) {
            console.warn("Selected tile is not a booster");
            return null;
        }

        const newState = state.clone();
        const affectedTiles: Array<{ row: number, col: number }> = [];
 
        for (let col = 0; col < newState.cols; col++) {
            const tileType = newState.getTileAt(centerRow, col);
            if (tileType !== TileType.None) {
                affectedTiles.push({ row: centerRow, col });
                newState.setTileAt(centerRow, col, TileType.None);
            }
        }
 
        for (let row = 0; row < newState.rows; row++) {
            const tileType = newState.getTileAt(row, centerCol);
            if (tileType !== TileType.None) {
                affectedTiles.push({ row, col: centerCol });
                newState.setTileAt(row, centerCol, TileType.None);
            }
        }

        newState.wasRemove = affectedTiles;
        return newState;
    }
 
    public activateExplosionBooster(
        state: BoardState,
        centerRow: number,
        centerCol: number,
        explosionRadius: number = 2
    ): BoardState {
        
        if (state.getTileAt(centerRow, centerCol) !== TileType.Booster) {
            console.warn("Selected tile is not a booster");
            return null;
        }

        const newState = state.clone();
        const affectedTiles: Array<{ row: number, col: number }> = [];
 
        for (let row = Math.max(0, centerRow - explosionRadius); 
             row <= Math.min(newState.rows - 1, centerRow + explosionRadius); 
             row++) {
            for (let col = Math.max(0, centerCol - explosionRadius); 
                 col <= Math.min(newState.cols - 1, centerCol + explosionRadius); 
                 col++) {
                const tileType = newState.getTileAt(row, col);
                if (tileType !== TileType.None) {
                    affectedTiles.push({ row, col });
                    newState.setTileAt(row, col, TileType.None);
                }
            }
        }

        newState.wasRemove = affectedTiles;
        return newState;
    }
}
