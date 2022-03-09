const rd = new Renderer();
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createGrid(20, 10, height * 2, height, 0, 0, true);
  // grid.drawlines();
}

function draw() {
  background(220);
  rd.render();
}

