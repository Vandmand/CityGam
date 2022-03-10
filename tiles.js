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
        this.tileset = {
            intersect: "Sprites/intersect.png",
            straight: "Sprites/straight.png",
            tcross: "Sprites/tcross.png",
            turn: "Sprites/turn.png",
            grass: "Sprites/grass.png"
        }
    }
    createTiles() {
        this.grid.getAllPos().forEach((position, index) => {
            position.tile = undefined;
            position.tileRotation = 0;
            rd.add('tiles' + index, () => imageMode(CENTER))
            rd.add('tiles' + index, () => angleMode(DEGREES))
            rd.add('tiles' + index, () => translate(position.px, position.py))
            rd.add('tiles' + index, () => rotate(position.tileRotation))
            rd.add('tiles' + index, () => position.tile == undefined ? undefined : image(position.tile, 0,0, this.grid.gridWidth, this.grid.gridHeight))
            });
    }
    placeTile(x, y, tile, rotation) {
        let gridPos = this.grid.pos(x,y);
        if(!gridPos.tile) {
            gridPos.tile = this.tile(tile);
            if(rotation) {
                gridPos.tileRotation = rotation;
            }
        } else {
            console.error('Grid position not empty');
        }
    }
    tile(tile) {
        const temp = loadImage(this.tileset[tile])
        return temp
    }
    // At some point making importing tileset json files maybe
}

function createTileModule(grid) {
    let temp = new TileModule(grid);
    temp.createTiles();
    return temp;
}
