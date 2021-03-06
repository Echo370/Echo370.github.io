// Bubbles oop demo :D
//Corey Klassen
//Feb 4, 2021

let theBubbles  = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  window.setInterval(spawnBubble, 500); // runs the function every half second
}


function draw() {
  background(220);
  for(let i = theBubbles.length - 1; i >= 0; i --) {
    if (theBubbles[i].pop) {
      theBubbles.splice(i, 1);
    }
    else {
      theBubbles[i].move();
      theBubbles[i].display(); 
    }
    
  }
}

function spawnBubble() {
  let someBubble = new Bubble();
  theBubbles.push(someBubble);
}


class Bubble {
  constructor() {
    this.x = random(width);
    this.y = height + 100;
    this.dx = 0;
    this.dy = -3;
    this.radius = random(20, 40);
    this.theta = 0;
    this.isAlive = true;
    this.death = 0;
    this.waitTime = 1000;
    this.pop = false;
  }
  move() {
    //stop when at top of screen
    if(this.y - this.radius > 0) {
     //basic movement
    this.x += this.dx;
    this.y += this.dy;

    //randomly move left/right
    this.dx = map(noise(this.theta), 0, 1, -5, 5);
    this.theta += 0.02;
    }
    //when it hits the top
    else if (this.isAlive) {
      this.isAlive = false;
      this.death = millis();
    }
    else {
      if (millis() > this.death + this.waitTime) {
        this.pop = true;
      }
    }
  }
  display() {
    if (!this.pop) {
      noStroke()
      fill("blue");
      ellipse(this.x, this.y, this.radius*2, this.radius*2);
    }  
  }
}