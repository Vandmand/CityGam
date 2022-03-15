// ===========================================================
// = Grid Module = Elias Kulmbak =
// ===========================================================
/*
    This module makes a usable and editable grid
    Because the p5 canvas is also calculated as a coordinate system
    we've split up the x and y position of the grid and canvas up in
    px, py and gx, gy (for pixelposition, and gridposition)
*/
class Grid {
    constructor(rows, cols, w, h, x, y, center) {
        // Contructor variables
        this.rows = rows
        this.cols = cols
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        // the width and height of a single square in the grid
        this.gridWidth = this.w/this.rows
        this.gridHeight = this.h/this.cols

        // Defines whether the positions should be the center of the grid
        // Or at the left highest corner. Usefull nearestPos()
        this.center = center

        // The variable that contains the grid
        this.grid = []

        // Standard element for a position in grid
        this.GridElement = class GridElement {
            constructor(gx, gy, px, py) {
                this.gx = gx
                this.gy = gy
                this.px = px
                this.py = py
                this.occupied = false
            }
        }
        //Custom error message
        this.error = class GirdError extends Error {
            constructor(message) {
                super(message);
                this.name = "GridError";
            }
        }
        // All debugging tools
        this.debug = {

        }
    }
    // Initialize grid
    createGrid() {

        // Calculate a center offset if this.center is true
        const centerValueX = this.center ? this.gridWidth / 2 : 0
        const centerValueY = this.center ? this.gridHeight / 2 : 0

        for (let row = 0; row < this.rows; row++) {
            this.grid[row] = []

            for (let col = 0; col < this.cols; col++) {

                // Calculate positions
                const pos = {
                    x: this.gridWidth * row + this.x + centerValueX,
                    y: this.gridHeight * col + this.y + centerValueY
                }

                // Add a new element to the grid with positions saved
                this.grid[row][col] = new this.GridElement(row, col, pos.x, pos.y)
            }
        }
    }
    
    // Get pixelposition from grid position
    pos(gx, gy) {
        // Check to see if grid position exist
        if(this.grid[gx] && this.grid[gy]) {
            return this.grid[gx][gy]
        } else {
            return undefined
        }
    }

    // Draw lines to visualise the grids position
    drawlines() {
        const centerValueX = this.center ? this.gridWidth / 2 : 0;
        const centerValueY = this.center ? this.gridHeight / 2 : 0;

        rd.add('gridLines', () => noFill());
        this.getAllPos().forEach(position => {
            rd.add('gridLines', () => rect(position.px - centerValueX, position.py - centerValueY, this.gridWidth, this.gridHeight));
        });
    }

    // Get all positions as one long array
    getAllPos() {
        let returnArr = this.grid[0];
        for (let i = 1; i < this.grid.length; i++) {
            const col = this.grid[i];
            returnArr = concat(returnArr, col);
        }
        return returnArr;
    }

    // Get the nearest Position
    nearestPos(px, py) {
        return this.getAllPos().reduce((a, b) => dist(px, py, a.px, a.py) < dist(px, py, b.px, b.py) ? a : b)
    }
}

// The function used to create a new grid
function createGrid(rows, cols = rows, w = width, h = height, x = 0, y = 0, center = false) {
    const temp = new Grid(rows, cols, w, h, x, y, center);
    temp.createGrid();
    return temp;
}


