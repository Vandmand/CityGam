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
            iturn: "Sprites/iturn.png",
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

    updateTile(gridPosition) {
        if (gridPosition) {
            if (gridPosition.tile) {
                let tile
                let rotation
                let posArr = [];

                this.getNeighbors(gridPosition).forEach((pos, i) => {
                    if (pos) {
                        posArr[i] = pos.tile ? true : false
                    } else {
                        posArr[i] = false
                    }
                })
                switch (posArr.toString()) {
                    case 'true,true,false,false':
                        tile = 'straight';
                        rotation = 90;
                        break;
                    case 'false,false,true,true':
                        tile = 'straight';
                        rotation = 0;
                        break;
                    case 'true,false,false,true':
                        tile = 'turn';
                        rotation = 180;
                        break;
                    case 'false,true,true,false':
                        tile = 'turn';
                        rotation = 0;
                        break;
                    case 'true,false,true,false':
                        tile = 'turn';
                        rotation = 90;
                        break;
                    case 'false,true,false,true':
                        tile = 'turn';
                        rotation = 270;
                        break;
                    case 'true,false,false,false':
                        tile = 'end';
                        rotation = 90;
                        break;
                    case 'false,true,false,false':
                        tile = 'end';
                        rotation = 270
                        break;
                    case 'false,false,true,false':
                        tile = 'end';
                        rotation = 0;
                        break;
                    case 'false,false,false,true':
                        tile = 'end';
                        rotation = 180
                        break;
                    case 'true,true,true,true':
                        tile = 'intersect';
                        rotation = 0;
                        break;
                    case 'true,true,true,false':
                        tile = 'tcross';
                        rotation = 90
                        break;
                    case 'false,true,true,true':
                        tile = 'tcross';
                        rotation = 0;
                        break;
                    case 'true,false,true,true':
                        tile = 'tcross';
                        rotation = 180;
                        break;
                    case 'true,true,false,true':
                        tile = 'tcross';
                        rotation = 270;
                        break;
                    default:
                        tile = 'point'
                        rotation = 0
                        break;
                }
                gridPosition.tile = this.tile(tile)
                gridPosition.tileRotation = rotation
            } else {
                return;
            }
        }
    }
    getNeighbors(position) {
        // Array counted as up down left right
        let arr = [
            grid.pos(position.gx, position.gy - 1),
            grid.pos(position.gx, position.gy + 1),
            grid.pos(position.gx - 1, position.gy),
            grid.pos(position.gx + 1, position.gy)
        ];
        return arr;


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
    switch (mouseButton) {
        case LEFT:
            tM.placeTile(gridPos.gx, gridPos.gy, 'point', 0)
            tM.updateTile(gridPos);
            tM.getNeighbors(gridPos).forEach(pos => {
                tM.updateTile(pos)
            });
            break;
        case RIGHT:
            gridPos.tile = undefined;
            tM.getNeighbors(gridPos).forEach(pos => {
                tM.updateTile(pos)
            });
            break;
        default:
            break;
    }
}

