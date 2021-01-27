// Only one color 
// Corey Klassen
// Jan, 27th, 2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


  
// Only one color

let grid = createEmptyGrid(10, 10);
let rows, cols, cellWidth, cellHeight;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = grid.length;
  cols = grid[0].length;
  cellWidth = width/cols;
  cellHeight = height/rows;
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed() {

  
  let x = Math.floor(mouseX / cellWidth);
  let y = Math.floor(mouseY / cellHeight);

  toggleCell(x, y);   //self
  //toggleCell(x, y-1); //north
  //toggleCell(x, y+1); //south
  //toggleCell(x+1, y); //east
  //toggleCell(x-1, y); //west
}

function toggleCell(x, y) {
  //check that the coordinates are in the array
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    if (grid[y][x] === 1) {
      grid[y][x] = 0;
    }
    else if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
  }
}


function displayGrid() {
  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      if (grid[y][x] === 0) {
        fill("green");
      }
      if (grid[y][x] === 1) {
        fill("Fuchsia");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createEmptyGrid(cols, rows) {
  let empty = [];
  for (let y=0; y<rows; y++) {
    empty.push([]);
    for (let x=0; x<cols; x++) {
      empty[y].push(0);
    }
  }
  return empty;
}


function keyPressed() {
  if (key === "e") {
    grid = createEasyGrid(cols, rows);
  }
  if (key === "m") {
    grid = createMediumGrid(cols, rows);
  }
  if (key === "h") {
    grid = createHardGrid(cols, rows);
  }
}

function createEasyGrid(cols, rows) {
  let empty = [];
  for (let y=0; y<rows; y++) {
    empty.push([]);
    for (let x=0; x<cols; x++) {
      if(random(60) < 50){
        empty[y].push(0);
      }
      else {
        empty[y].push(1);
      }
    }
  }
  return empty;
}

function createMediumGrid(cols, rows) {
  let empty = [];
  for (let y=0; y<rows; y++) {
    empty.push([]);
    for (let x=0; x<cols; x++) {
      if(random(90) < 50){
        empty[y].push(0);
      }
      else {
        empty[y].push(1);
      }
    }
  }
  return empty;
}


function createHardGrid(cols, rows) {
  let empty = [];
  for (let y=0; y<rows; y++) {
    empty.push([]);
    for (let x=0; x<cols; x++) {
      if(random(150) < 50){
        empty[y].push(0);
      }
      else {
        empty[y].push(1);
      }
    }
  }
  return empty;
}