// ===========================================================
// = Tile Module = Elias Kulmbak =
// ===========================================================
/*
    This module creates the tiles for each position in grid,
    and brings methods to dynamically change the tiles:
*/
class TileModule {
    constructor(gridModule) {
        this.grid = gridModule

        this.tiles = {
            ROAD: color(107)
        }
    }
    createTiles() {
        rd.add('tiles', () => rectMode(CENTER))
        this.grid.getAllPos().forEach(position => {
            position.tile = undefined;
            position.color = color(0,0,0)
            rd.add('tiles', () => position.tile? fill(position.color) : undefined)
            rd.add('tiles', () => position.tile? rect(position.px,position.py,this.grid.gridWidth,this.grid.gridHeight) : undefined)
        });
    }
    placeTile(x, y, tile) {
        const gridPos = this.grid.pos(x, y);
        if (!gridPos.tile) {
            if(this.tiles[tile]) {
                gridPos.tile = tile;
                gridPos.color = this.tiles[tile]
            }
        } else {
            console.error('Grid position not empty');
        }
    }
}

function createTileModule(grid) {
    let temp = new TileModule(grid);
    temp.createTiles();
    return temp;
}

function mousePressed() {
    const gridPos = grid.nearestPos(mouseX, mouseY);
    switch (mouseButton) {
        case LEFT:
            tm.placeTile(gridPos.gx, gridPos.gy, 'ROAD')
            break;
        case RIGHT:
            gridPos.tile = undefined;
            break;
        default:
            break;
    }
}

