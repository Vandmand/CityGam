# The Grid System
Because the game needs to run on a grid system, we've decided to start at making a grid.
For easier creation of the grid module, we've decided to create a pseudo-version.
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

When looking at this pseudocode it's logical to start with the class and class data.

## The Grid Data
Because we want the grid system to be as modular as possible, we've decided that the most logical class data is:

* `rows` : Number of rows in the grid
* `cols` : Number of columns in the grid
* `w` : With of the grid
* `h` : Height of the grid
* `x` : x position of grid
* `y` : y position of grid
* `center` : A boolean to define whether the x, and y position should be centered in the grid square.
* `grid` : The variable to hold all the data of individual grid squares
* `gridElement` : A class that stores and represents the grid;

#### gridElement
To hold any kind of information, in a grid we've made a gridElement class. This class is to be created for each position in the grid. The class stores the position in the grid; both relative to the grid and relative to the canvas. To differentiate between the two kinds of positions, each coordinate set has been named `px, py` for pixelposition (relative to canvas), and 
`gx, gy` for gridposition (relative to grid).

## The grid methods
### createGrid()
The `createGrid()` function creates a pushes position class to an array representing the array position. A created grid looks like this:
![[Pasted image 20220309103511.png]]
The array is structured like `rows[]` with `cols[]` inside with objects.

The `createGrid()` function can be viewed [[Grid Snippets#createGrid|here]].

### findPosition()
The find position class has been shortened to `pos()`, because the function is used frequently. The function works by checking if a position in the grid exists and return its [[Grid#gridElement|gridElement]]. The `pos()` code can be viewed [[Grid Snippets#pos|here]]

### getAllPos()
Frequent times it is needed to get a list of all the positions. Therefore, a `getAllPos()` method has been created to return an array of all the [[Grid#gridElement|gridElements]]. The function works by looping through all the gridElements and pushing it to a return array. The `getAllPos()` function can be viewed [[Grid Snippets#getAllPos|here]].

### nearestPos()
Using the `nearestPos()` function, this function returns the nearest [[Grid#gridElement|gridElement]].  The `nearestPos()` function can be viewed [[Grid Snippets#|here]].




