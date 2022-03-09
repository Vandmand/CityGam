# The Grid System
Becuase the game needs to run on a grid system, we've decided to start at making a grid.
For easier creation of the grid module we've decided to create a seudo-version.
This version looks like this:

```js
class Grid {

 constructor(rows, cols, w, h, x, y, center) {

 // Data here...

 }

 createGrid() {

 // Code here...

 }

 findPosition() {

 // Code here...

 }

}
```

When looking at this seudocode it's logical to start with the class and class data.

## The Grid Class
Because we want the grid system to be as modular as possible we've decided that the most logical class data is

* `rows` : Number of rows in the grid
* `cols` : Number of collums in the grid
* `w` : With of the grid
* `h` : Height of the grid
* `x` : x position of grid
* `y` : y position of grid
* `center` : A boolean to define whether or not the x, and y position should be centered in the grid square.

Furthermore, the class should have some methods. These will be described in more detail.

### createGrid()
The `createGrid()` function creates a pushes position class to an array representing the array position. A created grid looks like this:
![[Pasted image 20220309103511.png]]
The array is structured like `rows[]` with `cols[]` inside with objects.

```js
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
 ```
