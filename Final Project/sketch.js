// RPG battle
// Corey Klassen
// Feb, 23rd, 2021
//things that are needed;timer for moves to be shown, enemy random attack, balance game, active health


let StartGame = true;
let enemyhealth = 150;
let health1 = 150;
let health2 = 150;
let health3 = 150;
let health4 = 150;
let enemy = true;
let character1 = false;
let character2 = false;
let character3 = false;
let character4 = false;
let charaAlive = false;


function setup() {
  // Start Screen
  createCanvas(windowWidth, windowHeight);
  background(196, 202, 255);
  fill(160 ,160, 160);
  rect(25, 25, 90, 50);
  fill(255, 178, 105);
  rect(23, 97, 255, 100);
  fill(178, 255, 105);
  rect(23, 210, 255, 110);
  fill(102, 102, 255);
  rect(23, 330, 255, 110);
  fill(178, 102, 255);
  rect(23, 450, 255, 110);
  fill(160 ,160, 160);
  rect(640, 25, 150, 50);
  fill(160 ,160, 160);
  rect(490, 90, 460, 130);
  //Apllies Text
  fill("black");
  textSize(50);
  text('Press the space bar to start!',450, 350);
  //Top right gives info about game and health
  text('Info', 25, 25, 150, 150);
  text('Rules', 650, 25, 150, 150);
  textSize(15);
  text('Press r to play as Chara1', 25, 100, 200, 200);
  text('Press j to play as Chara2', 25, 220, 200, 200);
  text('Press a to play as Chara3', 25, 340, 200, 200);
  text('Press y to play as Chara4', 25, 460, 200, 200);
  //Explains rules
  text('You will choose 1 character to fight against the enemy. If either you or the enemys health reaches 0 its game over.',
  500, 100, 420, 300);
  text('Each Character has different moves that do different damage and some have side effects. To use moves during the battle press 1, 2, or 3 to attack.',
  500, 150, 443, 300);
  //Goes into characters moves
  textSize(12);
  text('Health = 150', 25, 120, 200, 200);
  text('Move 1/Hard Knuckle = 15dmg', 25, 140, 200, 200);
  text('Move 2/Flame Remix = 35dmg, 10 - recoil', 25, 160, 280, 200);
  text('Move 3/Inferno Buster = 50dmg, 25 - recoil', 25, 180, 250, 200);

  text('Health = 150', 25, 240, 200, 200);
  text('Move 1/Vine Lash = 15dmg', 25, 260, 200, 200);
  text('Move 2/Drain Whip = 10dmg, health + 20', 25, 280, 250, 200);
  text('Move 3/Jungles Wrath = 35dmg, 15 - recoil', 25, 300, 250, 200);

  text('Health = 150', 25, 360, 200, 200);
  text('Move 1/Drown = 15dmg', 25, 380, 200, 200);
  text('Move 2/Hail Storm = 22dmg', 25, 400, 200, 200);
  text('Move 3/Abyssal Depths = 30dmg', 25, 420, 250, 200);

  text('Health = 150', 25, 480, 200, 200);
  text('Move 1/Slash = 15dmg', 25, 500, 200, 200);
  text('Move 2/Twilight Time = 10dmg,20 + health', 25, 520, 250, 200);
  text('Move 3/Luna Blast = 50dmg, 25 - recoil', 25, 540, 250, 200);

  StartGame = false;
}



function preload(){
  Cuboo = loadImage("assets/Cuboo.webp");
  Babara = loadImage("assets/Babara.webp");
  Infernore = loadImage("assets/Infernore.webp");
  Poppi = loadImage("assets/Poppi.png");
  backPurple = loadImage("assets/purpleBackground.jpg");
  backBlue = loadImage("assets/blueBackground.jpg");
  Steelhead = loadImage("assets/Steelhead.webp");
}

//Checks Enemy Health
//Enemy and Character health needs to be fixed 
function CheckEnemyHealth() {
  if (enemyhealth <= 120) {
    noStroke();
    fill("gray");
    rect(1349, 50, 50, 50);
    EnemyTurn();
  }
  if (enemyhealth <= 90) {
    noStroke();
    fill("gray");
    rect(1299, 50, 50, 50);
    EnemyTurn();
  }
  if (enemyhealth <= 60) {
    noStroke();
    fill("gray")
    rect(1249, 50, 50, 50);
    EnemyTurn();
  }
    if (enemyhealth <= 30) {
    noStroke();
    fill("gray")
    rect(1199, 50, 50, 50);
    EnemyTurn();
  }
    if (enemyhealth <= 0) {
    StartGame = false;
    noStroke();
    fill("gray");
    rect(1149, 50, 50, 50);
    fill("green");
    rect(600, 350, 500, 200);
    fill("black");
    textSize(50);
    text('You win!, please play again',630, 400, 400, 400);
  }
}

//Checks health1
function CheckYourHealth1() {
  if(health1 <= 120 ){
    noStroke();
    fill("gray");
    rect(50, 649, 50, 50,);
  }
  if(health1 <= 90) {
    noStroke();
    fill("gray");
    rect(100, 649, 50, 50,);
  }
  if(health1 <= 60) {
    noStroke();
    fill("gray");
    rect(150, 649, 50, 50,);
  }
  if(health1 <= 30) {
    noStroke();
    fill("gray");
    rect(200, 649, 50, 50,);
  }
  if(health1 <= 0) {
    StartGame = false;
    noStroke();
    fill("gray");
    rect(250, 649, 50, 50,);
    fill("red");
    rect(600, 350, 500, 200);
    fill("black");
    textSize(50);
    text('You lose, please play again',630, 400, 400, 400);   
  }
}

//Checks Health2
function CheckYourHealth2() {
  if(health2 <= 120 ){
    noStroke();
    fill("gray");
    rect(50, 649, 50, 50,);
  }
  if(health2 <= 90) {
    noStroke();
    fill("gray");
    rect(100, 649, 50, 50,);
  }
  if(health2 <= 60) {
    noStroke();
    fill("gray");
    rect(150, 649, 50, 50,);
  }
  if(health2 <= 30) {
    noStroke();
    fill("gray");
    rect(200, 649, 50, 50,);
  }
  if(health2 <= 0) {
    StartGame = false;
    noStroke();
    fill("gray");
    rect(250, 649, 50, 50,);
    fill("red");
    rect(600, 350, 500, 200);
    fill("black");
    textSize(50);
    text('You lose, please play again',630, 400, 400, 400);   
  }
}

//Checks Health3
function CheckYourHealth3() {
  if(health3 <= 120 ){
    noStroke();
    fill("gray");
    rect(50, 649, 50, 50,);
  }
  if(health3 <= 90) {
    noStroke();
    fill("gray");
    rect(100, 649, 50, 50,);
  }
  if(health3 <= 60) {
    noStroke();
    fill("gray");
    rect(150, 649, 50, 50,);
  }
  if(health3 <= 30) {
    noStroke();
    fill("gray");
    rect(200, 649, 50, 50,);
  }
  if(health3 <= 0) {
    StartGame = false;
    noStroke();
    fill("gray");
    rect(250, 649, 50, 50,);
    fill("red");
    rect(600, 350, 500, 200);
    fill("black");
    textSize(50);
    text('You lose, please play again',630, 400, 400, 400);   
  }
}

//Checks Health4
function CheckYourHealth4() {
  if(health4 <= 120 ){
    noStroke();
    fill("gray");
    rect(50, 649, 50, 50,);
  }
  if(health4 <= 90) {
    noStroke();
    fill("gray");
    rect(100, 649, 50, 50,);
  }
  if(health4 <= 60) {
    noStroke();
    fill("gray");
    rect(150, 649, 50, 50,);
  }
  if(health4 <= 30) {
    noStroke();
    fill("gray");
    rect(200, 649, 50, 50,);
  }
  if(health4 <= 0) {
    StartGame = false;
    noStroke();
    fill("gray");
    rect(250, 649, 50, 50,);
    fill("red");
    rect(600, 350, 500, 200);
    fill("black");
    textSize(50);
    text('You lose, please play again',630, 400, 400, 400);   
  }
}

//CPU Chooses a random attack
function EnemyTurn() {
  if(character1 && StartGame === true) {
    health1 = health1 - 15;
    CheckYourHealth1();
  }
  if(character2 && StartGame === true) {
    health2 = health2 - 15;
    CheckYourHealth2();
  }
  if(character3 && StartGame === true) {
    health3 = health3 - 15;
    CheckYourHealth3();
  }
  if(character4 && StartGame === true) {
    health4 = health4 - 15;
    CheckYourHealth4();
  }
  //Needs to be random attack
}


function keyPressed() {
  if (key === " ") {
    //Top Right Enemy health bars
    //let enemy = true;
    StartGame = true;
    background("gray");
    image(backBlue, 0, 0, windowWidth, windowWidth);
    fill("green");
    strokeWeight(2);
    rect(1349, 50, 50, 50);
    rect(1299, 50, 50, 50);
    rect(1249, 50, 50, 50);
    rect(1199, 50, 50, 50);
    rect(1149, 50, 50, 50);

    //Ground sprite
    fill(color(32, 78, 100));
    ellipse(1100, 300, 300, 100);

    //Enemy Sprite
    image(Steelhead, 1000, 140, 200, 200);
    //fill("Black");
    //ellipse(1100, 270, 100, 100);
    //fill(51, 0, 25);
    //ellipse(1100, 270, 20, 20);

  }
  //Bottom left Character health bars
  //Character 1 health bar, Ryuji
  if (key === "r") {
    if(StartGame === true) {
      if(charaAlive === false) {
        charaAlive = true;
        character1 = true;
      }
    }

    if (character1 && StartGame === true) {
      fill("yellow");
      rect(50, 649, 50, 50,);
      rect(100, 649, 50, 50,);
      rect(150, 649, 50, 50,);
      rect(200, 649, 50, 50,);
      rect(250, 649, 50, 50,);

      //Move selections
      fill(255, 153, 51);
      rect(50, 300, 150, 50);
      rect(50, 240, 150, 50);
      rect(50, 360, 150, 50);
      fill("black");
      textSize(20);
      text('2.Hard knukle',54, 320, 150, 50);
      text('1.Flame Remix',54, 260, 150, 50);
      text('3.Inferno Buster',54, 380, 150, 50);

      //Ground sprite
      fill(color(32, 78, 100));
      ellipse(370, 540, 300, 100);

      //Character Sprite
      image(Infernore, 270, 370, 200, 200);
      //fill("yellow");
      //ellipse(370, 500, 100, 100);
      //fill("black");
      //ellipse(370, 500, 50, 50);
    }

  }
  //Character 2 health bar, Joker
  if (key === "j") {
    if(StartGame === true) {
      if(charaAlive === false) {
        charaAlive = true;
        character2 = true;
      }
    }

    if (character2 && StartGame === true) {
    fill(51, 255, 51);
    rect(50, 649, 50, 50,);
    rect(100, 649, 50, 50,);
    rect(150, 649, 50, 50,);
    rect(200, 649, 50, 50,);
    rect(250, 649, 50, 50,);

    //Move selections
    fill(51, 255, 51);
    rect(50, 300, 150, 50);
    rect(50, 240, 150, 50);
    rect(50, 360, 150, 50);
    fill("black");
    textSize(20);
    text('2.Drain Whip',54, 320, 150, 50);
    text('1.Vine Lash',54, 260, 150, 50);
    text('3.Jungles Wrath',54, 380, 150, 50);

    //Ground sprite
    fill(color(32, 78, 100));
    ellipse(370, 540, 300, 100);

    //Character sprite
    image(Cuboo, 270, 370, 200, 200);
    //fill("purple");
    //ellipse(370, 500, 100, 100);
    //fill("black");
    //ellipse(370, 500, 50, 50);
    }

  }
  //Character 3 health bar, Ann
  if (key === "a") {
    if(StartGame === true) {
      if(charaAlive === false) {
        charaAlive = true;
        character3 = true;
      }
    }

    if (character3 && StartGame === true) {
      fill(85, 145, 213);
      rect(50, 649, 50, 50,);
      rect(100, 649, 50, 50,);
      rect(150, 649, 50, 50,);
      rect(200, 649, 50, 50,);
      rect(250, 649, 50, 50,);

      //Move selections
      fill(85, 145, 213);
      rect(50, 300, 150, 50);
      rect(50, 240, 150, 50);
      rect(50, 360, 150, 50);
      fill("black")
      textSize(17);
      text('2.Wave Dance',54, 320, 150, 50);
      text('1.Drown',54, 260, 150, 50);
      text('3.Abyssal Depths',54, 380, 150, 50);

      //Ground sprite
      fill(color(32, 78, 100));
      ellipse(370, 540, 300, 100);

      //Character Sprite
      image(Babara, 270, 370, 200, 200);
      //fill("red");
      //ellipse(370, 500, 100, 100);
      //fill("pink");
      //ellipse(370, 500, 50, 50);
    }
  
  }
  //Character 4 health bar, Yusuke
  if (key === "y") {
    if(StartGame === true) {
      if(charaAlive === false) {
        charaAlive = true;
        character4 = true;
      }
    }

    if (character4 && StartGame === true) {
      fill(169, 60, 252);
      rect(50, 649, 50, 50,);
      rect(100, 649, 50, 50,);
      rect(150, 649, 50, 50,);
      rect(200, 649, 50, 50,);
      rect(250, 649, 50, 50,);

      //Move selections
      fill(169, 60, 252);
      rect(50, 300, 150, 50);
      rect(50, 240, 150, 50);
      rect(50, 360, 150, 50);
      fill("black");
      textSize(20);
      text('2.Twilight Time',54, 320, 150, 50);
      text('1.Slash',54, 260, 150, 50);
      text('3.Luna Blast',54, 380, 150, 50);

      //Ground sprite
      fill(color(32, 78, 100));
      ellipse(370, 540, 300, 100);

      //Character Sprite
      image(Poppi, 270, 370, 200, 200);
      //fill("Blue");
      //ellipse(370, 500, 100, 100);
      //fill("White");
      //ellipse(370, 500, 50, 50);
    }
  }
    
  //Selecting a move
  //Move 1
  if (key === "1") {
    if (character1 && StartGame === true) {
      enemyhealth = enemyhealth - 15;
      CheckEnemyHealth();
    }
    else if (character2 && StartGame === true) {
      enemyhealth = enemyhealth - 15;
      CheckEnemyHealth();
    }
    else if (character3 && StartGame === true) {
      enemyhealth = enemyhealth - 15;
      CheckEnemyHealth();
    }
    else if (character4 && StartGame === true) {
      enemyhealth = enemyhealth - 15;
      CheckEnemyHealth();
    }
  }
    
  //Move 2
  if (key === "2") {
    if (character1 && StartGame === true) {
      enemyhealth = enemyhealth - 35;
      health1 = health1 - 10;
      CheckEnemyHealth();
    }
    else if (character2 && StartGame === true) {
      enemyhealth = enemyhealth - 10;
      health2 = health2 + 20;
      CheckEnemyHealth();
    }
    else if (character3 && StartGame === true) {
      enemyhealth = enemyhealth - 22;
      CheckEnemyHealth();
    }
    else if (character4 && StartGame === true) {
      enemyhealth = enemyhealth -10;
      health4 = health4 + 20;
      CheckEnemyHealth();
    }
  }
    
  //Move3
  if (key === "3") {
    if (character1 && StartGame === true) {
      enemyhealth = enemyhealth - 50;
      health1 = health1 - 25;
      CheckEnemyHealth();
    }
    else if (character2 && StartGame === true) {
      enemyhealth = enemyhealth - 35;
      health2 = health2 - 15;
      CheckEnemyHealth();
    }
    else if (character3 && StartGame === true) {
      enemyhealth = enemyhealth - 30;
      CheckEnemyHealth();
    }
    else if (character4 && StartGame === true) {
      enemyhealth = enemyhealth - 50;
      health4 = health4 - 25;
      CheckEnemyHealth();
    }
  }
}
