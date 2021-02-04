// Gird-Based Game Assignment 
// Corey Klassen
// Jan, 27th, 2021

// Only one color, make the grid all red and get rid of any
//black tiles you see, you let a black tile stay to long it'll
//turn white meaning you failed.

let grid = createEmptyGrid(7, 7);
let rows, cols, cellWidth, cellHeight;
let startTime = 0;
let waitTime = 8000;
let isTimerGoing = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = grid.length;
  cols = grid[0].length;
  cellWidth = width/cols;
  cellHeight = height/rows;
}

//function preload() {
  //bgMusic = loadSound ("assets/song18.mp3");
//}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed() {
  let x = Math.floor(mouseX / cellWidth);
  let y = Math.floor(mouseY / cellHeight);
  toggleCell(x, y); 
}

function toggleCell(x, y) {
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    if (grid[y][x] === 1) {
      grid[y][x] = 0;
    }
  }
}

//creates grid from line 71-99. 
function displayGrid() {
  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      if (grid[y][x] === 0) {
        fill("red");
      }
      if (grid[y][x] === 1) {
        fill("black");
        if (isTimerGoing) {
          if (millis() > startTime + waitTime) {
            fill("white");
          }
        }
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

//difficulty setting, e key for easy, m key for medium, and h key for hard.
function keyPressed() {
  if (key === "e") {
    startTime = millis();
    isTimerGoing = true;
    grid = createEasyGrid(cols, rows);
  }
  if (key === "m") {
    startTime = millis();
    isTimerGoing = true;
    grid = createMediumGrid(cols, rows);
  }
  if (key === "h") {
    startTime = millis();
    isTimerGoing = true;
    grid = createHardGrid(cols, rows);
  }
}

//line 101-147 creates the difficulty grids.
function createEasyGrid(cols, rows) {
  let empty = [];
  for (let y=0; y<rows; y++) {
    empty.push([]);
    for (let x=0; x<cols; x++) {
      if(random(65) < 50){
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
      if(random(75) < 50){
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
      if(random(100) < 50){
        empty[y].push(0);
      }
      else {
        empty[y].push(1);
      }
    }
  }
  return empty;
}