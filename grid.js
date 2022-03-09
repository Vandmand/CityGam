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
    constructor(rows, cols = rows, w = width, h = height, x = 0, y = 0) {
        // Contructor variables
        this.rows = rows
        this.cols = cols
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        // The variable that contains the grid
        this.grid = []

        // Standard element for a position in grid
        this.GridElement = class GridElement {
            constructor(gx,gy,px, py) {
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
        for (let row = 0; row < this.rows; row++) {
            this.grid[row] = []
            for (let col = 0; col < this.cols; col++) {
                const pos = {x: this.w/this.rows*row+this.x, y: this.h/this.cols*col+this.y}
                this.grid[row][col] = new this.GridElement(row,col,pos.x,pos.y)
            }   
        }
    }
    // Get pixelposition from grid position
    pos(gx, gy) {
        return this.grid[gx] && this.grid[gy] ? this.grid[gx][gy]: console.error('No such grid position') 
    }
    drawlines() {
        this.grid.forEach(row => {
            rd.add('grid', () => line(row[0].px, row[0].py, row[row.length-1].px, row[row.length-1].py))
        });
        let firstCol = this.grid[0];
        let lastCol = this.grid[this.grid.length-1];
        for(let i=0; i < this.grid[0].length; i++) {
            rd.add('grid', () => line(firstCol[i].px, firstCol[i].py,lastCol[i].px,lastCol[i].py))
        }
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
    nearestPos(gt) {
        return this.getAllPos().reduce((a,b) => dist(pos.x,pos.y,a.px,a.py) < dist(pos.x,pos.y,b.px,b.py) ? a : b)
    }
}

function createGrid(rows, cols = rows, w = width, h = height, x = 0, y = 0) {
    const temp = new Grid(rows,cols,w,h,x,y);
    temp.createGrid();
    return temp;
}
