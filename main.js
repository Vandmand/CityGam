const rd = new Renderer();
let grid;
let tM;


function setup() {
  window.addEventListener("contextmenu", e => e.preventDefault());
  createCanvas(windowWidth, windowHeight);
  grid = createGrid(15,15, height, height, 0, 0, true);
  tM = createTileModule(grid);
  grid.drawlines();
  drawhappiness();
  housesplaced();
  housebox();
}

function draw() {
  background(106,190,48);
  rd.render();
}


