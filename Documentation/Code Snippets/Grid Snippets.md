# createGrid()
```js
createGrid() {

	// calculate a center offset if defined
	 const centerValueX = this.center ? this.gridWidth / 2 : 0
	 const centerValueY = this.center ? this.gridHeight / 2 : 0

 
	 for (let row = 0; row < this.rows; row++) {
		
		this.grid[row] = []

		for (let col = 0; col < this.cols; col++) {

		 // Variable for calculating the position.
		 const pos = {
			 x: this.gridWidth * row + this.x + centerValueX,
			 y: this.gridHeight * col + this.y + centerValueY
		 }
		 this.grid[row][col] = new this.GridElement(row, col, pos.x, pos.y)
		}
	 }
 }
```
# pos()
```js
pos(gx, gy) {
	 // Check to see if grid position exist
	 if(this.grid[gx] && this.grid[gy]) {
		 return this.grid[gx][gy]
	 } else {
	 return undefined
	 }
 }
```
# getAllPos()
```js
getAllPos() {
 // define a return array, and put the first collumn in.
 let returnArr = this.grid[0];
 
 for (let i = 1; i < this.grid.length; i++) {
	 const col = this.grid[i];
	 // for all the columns, add the next column onto it.
	 returnArr = concat(returnArr, col);
 }
 return returnArr;
}
```
# nearestPos()
```js
nearestPos(px, py) {
	return this.getAllPos().reduce((a, b) => 
	dist(px, py, a.px, a.py) < dist(px, py, b.px, b.py) ? a : b)
}
```
