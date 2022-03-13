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
            grass: "Sprites/grass.png",
            point: "Sprites/point.png",
            end: "Sprites/end.png"
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
            rd.add('tiles' + index, () => position.tile == undefined ? undefined : image(position.tile, 0, 0, this.grid.gridWidth, this.grid.gridHeight))
        });
    }
    placeTile(x, y, tile, rotation) {
        let gridPos = this.grid.pos(x, y);
        if (!gridPos.tile) {
            gridPos.tile = this.tile(tile);
            if (rotation) {
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

function mousePressed() {
    const gridPos = grid.nearestPos(mouseX, mouseY);
    const tileAndRotation = getTile(gridPos);
    tM.placeTile(gridPos.gx, gridPos.gy, tileAndRotation[0], tileAndRotation[1])
}

function getTile(gridPosition) {
    let returnValue = [];
    // Array counted as up down left right
    let nearbyPositions = [
        grid.pos(gridPosition.gx, gridPosition.gy - 1).tile,
        grid.pos(gridPosition.gx, gridPosition.gy + 1).tile,
        grid.pos(gridPosition.gx - 1, gridPosition.gy).tile,
        grid.pos(gridPosition.gx + 1, gridPosition.gy).tile
    ]
    nearbyPositions.forEach((pos, i) => {
        nearbyPositions[i] = pos ? true : false
    })
    yeet(nearbyPositions.toString())
    switch (nearbyPositions.toString()) {
        case 'false,false,false,false':
            returnValue = ['point', 0]
            break;
        case 'true,true,false,false':
            returnValue = ['straight', 90]
            break;
        case 'false,false,true,true':
            returnValue = ['straight', 0]
            break;
        case 'true,false,false,true':
            returnValue = ['turn', 90]
            break;
        case 'false,true,true,false':
            returnValue = ['turn', 0]
            break;
        default:
            returnValue = ['point', 0]
            break;
    }
    return returnValue
}
