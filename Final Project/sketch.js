// RPG battle
// Corey Klassen
// Feb, 23rd, 2021


let StartGame = true;
let enemyhealth = 140;
let health1 = 100;
let health2 = 100;
let health3 = 100;
let health4 = 100;
let enemy = true;
let character1 = true;
let character2 = true;
let character3 = true;
let character4 = true;

function setup() {
  //Sets background
  createCanvas(windowWidth, windowHeight);
  background("white");
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
  rect(490, 90, 450, 130);
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
  500, 100, 410, 300);
  text('Each Character has different moves that do different damage and some have side effects. To use moves during the battle press 1, 2, or 3 to attack.',
  500, 150, 430, 300);
  //Goes into characters moves
  textSize(12);
  text('Health = 100', 25, 120, 200, 200);
  text('Move 1/Hard Knuckle = 15dmg', 25, 140, 200, 200);
  text('Move 2/Flame Remix = 35dmg, 10 - recoil', 25, 160, 280, 200);
  text('Move 3/Inferno Buster = 50dmg, 25 - recoil', 25, 180, 250, 200);

  text('Health = 100', 25, 240, 200, 200);
  text('Move 1/Vine Lash = 15dmg', 25, 260, 200, 200);
  text('Move 2/Drain Whip = 10dmg, health + 20', 25, 280, 250, 200);
  text('Move 3/Jungles Wrath = 35dmg, 15 - recoil', 25, 300, 250, 200);

  text('Health = 100', 25, 360, 200, 200);
  text('Move 1/Drown = 15dmg', 25, 380, 200, 200);
  text('Move 2/Hail Storm = 22dmg', 25, 400, 200, 200);
  text('Move 3/Abyssal Depths = 30dmg', 25, 420, 250, 200);

  text('Health = 100', 25, 480, 200, 200);
  text('Move 1/Slash = 15dmg', 25, 500, 200, 200);
  text('Move 2/Twilight Time = 10dmg,20 + health', 25, 520, 250, 200);
  text('Move 3/Luna Blast = 50dmg, 25 - recoil', 25, 540, 250, 200);


  StartGame = false;
}

//Checks Enemy Health
function CheckEnemyHealth() {
  if (enemyhealth <= 160) {
    noStroke();
    fill("gray");
    rect(1349, 50, 50, 50);
    EnemyTurn();
  }
  if (enemyhealth <= 120) {
    noStroke();
    fill("gray");
    rect(1299, 50, 50, 50);
    EnemyTurn();
  }
  if (enemyhealth <= 80) {
    noStroke();
    fill("gray")
    rect(1249, 50, 50, 50);
    EnemyTurn();
  }
    if (enemyhealth <= 40) {
    noStroke();
    fill("gray")
    rect(1199, 50, 50, 50);
    EnemyTurn();
  }
    if (enemyhealth <= 0) {
    noStroke();
    fill("gray");
    rect(1149, 50, 50, 50);
    fill("black");
    textSize(50);
    text('You win!',500, 50, 200, 200);
  }
}

//Checks your health
function CheckYourHealth() {
  if(health1 <= 80 ){
    noStroke();
    fill("gray");
    rect(50, 649, 50, 50,);
  }
  if(health1 <= 60) {
    noStroke();
    fill("gray");
    rect(100, 649, 50, 50,);
  }
  if(health1 <= 40) {
    noStroke();
    fill("gray");
    rect(150, 649, 50, 50,);
  }
  if(health1 <= 20) {
    noStroke();
    fill("gray");
    rect(200, 649, 50, 50,);
  }
  if(health1 <= 0) {
    noStroke();
    fill("gray");
    rect(250, 649, 50, 50,);
    fill("black");
    textSize(50);
    text('You lose',500, 50, 200, 200);   
  }
}


//CPU Chooses a random attack
function EnemyTurn() {
  health1 = health1 - 15;
  CheckYourHealth();
  //let enemyattack = random(2);
  //if (enemyattack === 0) {
    //health1 = health1 - 10;
    //CheckYourHealth();
  //}
  //if (enemyattack === 1) {
    //health1 = health1 - 20;
    //CheckYourHealth();
 // }
  //if (enemyattack === 2) {
    //health1 = health1 - 15;
    //CheckYourHealth();
  //}
}


function keyPressed() {
  //Start screen
  // if (key === ("Enter")){
  //   if (StartGame === true) {
  //   background("white");
  //   fill("black");
  //   textSize(50);
  //   text('Press the space bar to start!',450, 350);
  //   StartGame = false;
  //   }
  // }
  if (key === " ") {
    //Top Right Enemy health bars
    //let enemy = true;
    background("gray");
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
    fill("Black");
    ellipse(1100, 270, 100, 100);
    fill(51, 0, 25);
    ellipse(1100, 270, 20, 20);

  }
  //Bottom left Character health bars
  //Character 1 health bar, Ryuji
  if (key === "r") {
    if (character1 === true) {
    character2 = false;
    character3 = false;
    character4 = false;
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
    fill("yellow");
    ellipse(370, 500, 100, 100);
    fill("black");
    ellipse(370, 500, 50, 50);
    }

  }
  //Character 2 health bar, Joker
  if (key === "j") {
    if (character2 === true) {
    character1 = false;
    character3 = false;
    character4 = false;
    fill("purple");
    rect(50, 649, 50, 50,);
    rect(100, 649, 50, 50,);
    rect(150, 649, 50, 50,);
    rect(200, 649, 50, 50,);
    rect(250, 649, 50, 50,);

    //Move selections
    fill(150, 0, 0);
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
    fill("purple");
    ellipse(370, 500, 100, 100);
    fill("black");
    ellipse(370, 500, 50, 50);
    }

  }
  //Character 3 health bar, Ann
  if (key === "a") {
    if (character3 === true) {
    character1 = false;
    character2 = false;
    character4 = false;
    fill("red");
    rect(50, 649, 50, 50,);
    rect(100, 649, 50, 50,);
    rect(150, 649, 50, 50,);
    rect(200, 649, 50, 50,);
    rect(250, 649, 50, 50,);

    //Move selections
    fill(153, 0, 76);
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
    fill("red");
    ellipse(370, 500, 100, 100);
    fill("pink");
    ellipse(370, 500, 50, 50);
    }
  
  }
  //Character 4 health bar, Yusuke
  if (key === "y") {
    if (character4 === true) {
    character1 = false;
    character2 = false;
    character3 = false;
    fill("blue");
    rect(50, 649, 50, 50,);
    rect(100, 649, 50, 50,);
    rect(150, 649, 50, 50,);
    rect(200, 649, 50, 50,);
    rect(250, 649, 50, 50,);

    //Move selections
    fill(0, 76, 153);
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
    fill("Blue");
    ellipse(370, 500, 100, 100);
    fill("White");
    ellipse(370, 500, 50, 50);
    }
  }
    
  //Selecting a move
  //Move 1
  if (key === "1") {
    if (character1 && enemy === true) {
      enemyhealth = enemyhealth - 15;
      CheckEnemyHealth();
    }
    else if (character2 && enemy === true) {
      enemyhealth = enemyhealth - 15;
      CheckEnemyHealth();
    }
    else if (character3 && enemy === true) {
      enemyhealth = enemyhealth - 15;
      CheckEnemyHealth();
    }
    else if (character4 && enemy === true) {
      enemyhealth = enemyhealth - 15;
      CheckEnemyHealth();
    }
  }
    
  //Move 2
  if (key === "2") {
    if (character1 && enemy === true) {
      enemyhealth = enemyhealth - 35;
      health1 = health1 - 10;
      CheckEnemyHealth();
    }
    else if (character2 && enemy === true) {
      enemyhealth = enemyhealth - 10;
      health2 = health2 + 20;
      CheckEnemyHealth();
    }
    else if (character3 && enemy === true) {
      enemyhealth = enemyhealth - 22;
      CheckEnemyHealth();
    }
    else if (character4 && enemy === true) {
      enemyhealth = enemyhealth -10;
      health4 = health4 + 20;
      CheckEnemyHealth();
    }
  }
    
  //Move3
  if (key === "3") {
    if (character1 && enemy === true) {
      enemyhealth = enemyhealth - 50;
      health1 = health1 - 25;
      CheckEnemyHealth();
    }
    else if (character2 && enemy === true) {
      enemyhealth = enemyhealth - 35;
      health2 = health2 - 15;
      CheckEnemyHealth();
    }
    else if (character3 && enemy === true) {
      enemyhealth = enemyhealth - 30;
      CheckEnemyHealth();
    }
    else if (character4 && enemy === true) {
      enemyhealth = enemyhealth - 50;
      health4 = health4 - 25;
      CheckEnemyHealth();
    }
  }
  // Health pot?
  if (key === "4") {

  } 
}
