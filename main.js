const rd = new Renderer();
let grid;
let tM;


function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createGrid(10, 10, height, height, 0, 0, true);
  tM = createTileModule(grid);
  // grid.drawlines();
  drawhappiness();
  housesplaced();

}

function draw() {
  background(106,190,48);
  rd.render();
}

