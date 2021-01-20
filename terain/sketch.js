// Perlin noise
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectheights;
let bikelocation = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectheights = generateheights();
}

function draw() {
  background(220);
let howmany = width;
  for (let i = bikelocation; i < bikelocation + howmany; i++) {
    let rectwidth = width / howmany;
    rect(rectwidth * (i - bikelocation), height - rectheights[i], rectwidth, rectheights[i]);
  }

  if(keyIsPressed) {
    if (key === "d") {
      bikelocation += 5;
    }
    if (key === "a") {
      bikelocation -= 5;
    }
  }
}


function generateheights() {
  let theheight = [];
  for (let i = 0; i < 5000; i ++){
    let rectheights = noise(i * 0.001) * height;
    theheight.push(rectheights);
  }
  return theheight;
}