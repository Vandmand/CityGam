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
    constructor(rows, cols = rows, w = width, h = height, x = 0, y = 0, center) {
        // Contructor variables
        this.rows = rows
        this.cols = cols
        this.x = x
        this.y = y
        this.w = w
        this.h = h

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
        // All debugging tools
        this.debug = {

        }
    }
    // Initialize grid
    createGrid() {
        const centerValueX = this.center ? this.w / this.rows / 2 : 0
        const centerValueY = this.center ? this.h / this.cols / 2 : 0
        for (let row = 0; row < this.rows; row++) {
            this.grid[row] = []
            for (let col = 0; col < this.cols; col++) {
                const pos = {
                    x: this.w / this.rows * row + this.x + centerValueX,
                    y: this.h / this.cols * col + this.y + centerValueY
                }
                this.grid[row][col] = new this.GridElement(row, col, pos.x, pos.y)
            }
        }
    }
    // Get pixelposition from grid position
    pos(gx, gy) {
        return this.grid[gx] && this.grid[gy] ? this.grid[gx][gy] : console.error('No such grid position')
    }

    // Draw lines to visualise the grids position
    drawlines() {
        const centerValueX = this.center ? this.w / this.rows / 2 : 0;
        const centerValueY = this.center ? this.h / this.cols / 2 : 0;

        rd.add('grid', () => noFill());
        this.getAllPos().forEach(position => {
            rd.add('grid', () => rect(position.px-centerValueX,position.py-centerValueY,this.w/this.rows,this.h/this.cols));
        });
    }

    // Nearest position in grid

    getAllPos() {
        let returnArr = this.grid[0];
        for (let i = 1; i < this.grid.length; i++) {
            const col = this.grid[i];
            returnArr = concat(returnArr, col)
        }
        return returnArr
    }
    nearestPos(px, py) {
        return this.getAllPos().reduce((a, b) => dist(px, py, a.px, a.py) < dist(px, py, b.px, b.py) ? a : b)
    }
}

function createGrid(rows, cols = rows, w = width, h = height, x = 0, y = 0, center = false) {
    const temp = new Grid(rows, cols, w, h, x, y, center);
    temp.createGrid();
    return temp;
}
