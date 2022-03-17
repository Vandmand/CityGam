const rd = new Renderer();
let grid;
let tM;


function setup() {
  window.addEventListener("contextmenu", e => e.preventDefault());
  createCanvas(windowWidth, windowHeight);
  createBackground();
  grid = createGrid(15,15, height, height, 0, 0, true);
  tM = createTileModule(grid, './Sprites/tileset.JSON');
  grid.drawlines();
  drawhappiness();
  housesplaced();

}

function draw() {
  rd.render();
}

function createBackground() {
  let backgroundTexture = loadImage('Sprites/end.png')
  rd.add('background', [
    () => background(20)
  ]);
}

