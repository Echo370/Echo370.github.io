// Triangle Recursion demo

let triangleVertices;

let numberTriangle = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  triangleVertices = [
    {x: width/2, y: 100},
    {x: 100, y: height - 100},
    {x: width - 100, y: height - 100}
  ];
}

function draw() {
  background(220);
  sirpin(triangleVertices, numberTriangle);
}


function sirpin(points, depth) {
  let theColors = ["blue", "red", "green", "white", "yellow", "pink", "orange", "purple", "black"]
  fill(theColors[depth % theColors.length]);
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);
  if(depth > 0) {
    sirpin([points[1], GetMidPoint(points[0], points[1]), GetMidPoint(points[1], points[2])], depth - 1);
    sirpin([points[0], GetMidPoint(points[0], points[1]), GetMidPoint(points[0], points[2])], depth - 1);
    sirpin([points[2], GetMidPoint(points[0], points[2]), GetMidPoint(points[1], points[2])], depth - 1);
  }
}

function mousePressed() {
  numberTriangle ++;
}

function GetMidPoint(point1, point2) {
  let midx = (point1.x + point2.x)/2;
  let midy = (point1.y + point2.y)/2;
  return {x: midx, y: midy};
}