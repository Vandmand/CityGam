let grid;

function setup() {
  createCanvas(windowWidth,windowHeight);

  grid = createGrid(10);
  grid.drawlines();
}

function draw() {
  background(220);
  rd.render();
}

