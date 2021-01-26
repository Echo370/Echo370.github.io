// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//grid neighbors

let gird = createEmptyGrid(4, 4);
let rows, cols, cellWidth, cellHeight;



function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = grid.lenght;
  cols = grid[0].lenght;
  cellWidth = width/cols;
  cellHeight = height/rows;
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed() {
  let x = Math.floor(mouseX/cellWidth);
  let y = Math.floor(mouseY/cellHeight);

  toggleCell(x, y); //self
  toggleCell(x, y-1); //north
  toggleCell(x, y+1); //south
  toggleCell(x+1, y); //east
  toggleCell(x-1, y); //west

}

function toggleCell(x, y) {
  //check that the cordinates are in the array
  if (x >= 0 && x < cols &&y >= 0 && y <  rows) {
    if (grid[y][x] === 1) {
      grid[y][x] = 0;
    }
    else if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
}


function displayGrid() {

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill("blue");
      }
      if (grid[y][x] === 1) {
        fill ("green");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}


function createEmptyGrid(cols,rows ) {
  let empty = [];
  for (let y = 0; y < rows; y++) {
    empty.push([]);
    for (let x = 0; x < cols; x++) {
      empty[y].push(0);
    }
  }
  return empty;
}