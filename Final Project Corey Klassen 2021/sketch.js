// RPG battle
// Corey Klassen
// Feb, 23rd, 2021

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
  //Text boxes with color
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
  rect(640, 400, 150, 50);
  fill(160 ,160, 160);
  rect(490, 500, 460, 130);
  fill(255, 149, 122);
  rect(540, 25, 320, 75);
  //Apllies Text
  fill("black");
  textSize(50);
  text('Press the space bar to start!',450, 350);
  //Title of Game
  text('RPG Battles!',550, 80);
  //Top left gives info about characters
  text('Info', 25, 25, 150, 150);
  text('Rules', 650, 405, 150, 150);
  textSize(15);
  text('Press r to play as Chara1', 25, 100, 200, 200);
  text('Press j to play as Chara2', 25, 220, 200, 200);
  text('Press a to play as Chara3', 25, 340, 200, 200);
  text('Press y to play as Chara4', 25, 460, 200, 200);
  //Explains rules in middle
  text('You will choose 1 character to fight against the enemy. If either you or the enemys health reaches 0 its game over.',
  500, 510, 420, 300);
  text('Each Character has different moves that do different damage and some have side effects. To use moves during the battle press 1, 2, or 3 to attack.',
  500, 560, 443, 300);
  //Explains characters moves
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

//Background and character sprites
function preload(){
  Cuboo = loadImage("assets/Cuboo.webp");
  Babara = loadImage("assets/Babara.webp");
  Infernore = loadImage("assets/Infernore.webp");
  Poppi = loadImage("assets/Poppi.png");
  backBlue = loadImage("assets/blueBackground.jpg");
  Steelhead = loadImage("assets/Steelhead.webp");
}

//Function active once the player has made a move
//Changes health bar if enemy health from line 92 to 129
//If the enemy is still alive, EnemyTurn is called so that the enemy can attack
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
    //If health equals or is less than zero the player wins and brings up the you win screen
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
    enemyhealth = 150;
    health1 = 150;
    health2 = 150;
    health3 = 150;
    health4 = 150;
    charaAlive = false;
    character1 = false;
    character2 = false;
    character3 = false;
    character4 = false;
  }
}


//Line 132 to 270 checks the 4 characters health and changes health bars
//Checks health1
function CheckYourHealth1() {
  if(health1 <= 120 ){
    noStroke();
    fill("gray");
    rect(50, 600, 50, 50,);
  }
  if(health1 <= 90) {
    noStroke();
    fill("gray");
    rect(100, 600, 50, 50,);
  }
  if(health1 <= 60) {
    noStroke();
    fill("gray");
    rect(150, 600, 50, 50,);
  }
  if(health1 <= 30) {
    noStroke();
    fill("gray");
    rect(200, 600, 50, 50,);
  }
  //If players health is equal to or less than 0 the player loses and brings up the you lose screen
  if(health1 <= 0) {
    StartGame = false;
    noStroke();
    fill("gray");
    rect(250, 600, 50, 50,);
    fill("red");
    rect(600, 350, 500, 200);
    fill("black");
    textSize(50);
    text('You lose, please play again',630, 400, 400, 400);
    enemyhealth = 150;
    health1 = 150;
    charaAlive = false;
    character1 = false;
    stroke(0); 
  }
}

//Checks Health2
function CheckYourHealth2() {
  if(health2 <= 120 ){
    noStroke();
    fill("gray");
    rect(50, 600, 50, 50,);
  }
  if(health2 <= 90) {
    noStroke();
    fill("gray");
    rect(100, 600, 50, 50,);
  }
  if(health2 <= 60) {
    noStroke();
    fill("gray");
    rect(150, 600, 50, 50,);
  }
  if(health2 <= 30) {
    noStroke();
    fill("gray");
    rect(200, 600, 50, 50,);
  }
  if(health2 <= 0) {
    StartGame = false;
    noStroke();
    fill("gray");
    rect(250, 600, 50, 50,);
    fill("red");
    rect(600, 350, 500, 200);
    fill("black");
    textSize(50);
    text('You lose, please play again',630, 400, 400, 400); 
    enemyhealth = 150;
    health2 = 150;
    charaAlive = false;
    character2 = false;
    stroke(0);
  }
}

//Checks Health3
function CheckYourHealth3() {
  if(health3 <= 120 ){
    noStroke();
    fill("gray");
    rect(50, 600, 50, 50,);
  }
  if(health3 <= 90) {
    noStroke();
    fill("gray");
    rect(100, 600, 50, 50,);
  }
  if(health3 <= 60) {
    noStroke();
    fill("gray");
    rect(150, 600, 50, 50,);
  }
  if(health3 <= 30) {
    noStroke();
    fill("gray");
    rect(200, 600, 50, 50,);
  }
  if(health3 <= 0) {
    StartGame = false;
    noStroke();
    fill("gray");
    rect(250, 600, 50, 50,);
    fill("red");
    rect(600, 350, 500, 200);
    fill("black");
    textSize(50);
    text('You lose, please play again',630, 400, 400, 400);
    enemyhealth = 150;
    health3 = 150; 
    charaAlive = false;
    character3 = false;
    stroke(0);  
  }
}

//Checks Health4
function CheckYourHealth4() {
  if(health4 <= 120 ){
    noStroke();
    fill("gray");
    rect(50, 600, 50, 50,);
  }
  if(health4 <= 90) {
    noStroke();
    fill("gray");
    rect(100, 600, 50, 50,);
  }
  if(health4 <= 60) {
    noStroke();
    fill("gray");
    rect(150, 600, 50, 50,);
  }
  if(health4 <= 30) {
    noStroke();
    fill("gray");
    rect(200, 600, 50, 50,);
  }
  if(health4 <= 0) {
    StartGame = false;
    noStroke();
    fill("gray");
    rect(250, 600, 50, 50,);
    fill("red");
    rect(600, 350, 500, 200);
    fill("black");
    textSize(50);
    text('You lose, please play again',630, 400, 400, 400);
    enemyhealth = 150;
    health4 = 150; 
    charaAlive = false;
    character4 = false;
    stroke(0);  
  }
}

//Lets Enemy choose a random attack based on the number it gets
//Enemys choice is applied in the Enemyturn function
function GetEnemyAttack() {
  let x = random(1, 4);
  if(x < 2) {
    x = 1;
  }
  else if(x < 3) {
    x = 2;
  }
  else if(x < 4) {
    x = 3;
  }
  return x;
}


//Applies enemys choice from the GetEnemyAttack function 
function EnemyTurn() {
  let damage = 0;
  let move = GetEnemyAttack(); // Calls GetEnemyAttack
  if(move === 1) {
    damage = 15;
  }
  else if(move === 2) {
    damage = 25;
  }
  else if(move === 3) {
    damage = 35;
  }

  //Picks character to attack based on if they are active
  if(character1 && StartGame === true) {
    health1 = health1 - damage;
    CheckYourHealth1();
  }
  if(character2 && StartGame === true) {
    health2 = health2 - damage;
    CheckYourHealth2();
  }
  if(character3 && StartGame === true) {
    health3 = health3 - damage;
    CheckYourHealth3();
  }
  if(character4 && StartGame === true) {
    health4 = health4 - damage;
    CheckYourHealth4();
  }
}

//Starts the battle if the space bar is pressed
function keyPressed() {
  if (key === " ") {
    //Top Right Enemy health bars
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
    fill(color(174, 255, 74));
    ellipse(1100, 300, 300, 100);

    //Shows Enemy Sprite
    image(Steelhead, 1000, 140, 200, 200);

  }
  //Bottom left Character health bars
  //Line 350 to 492 checks what character the player has choosen
  //Makes sure that only one character is ative during the battle
  if (key === "r") {
    if(StartGame === true) {
      if(charaAlive === false) {
        charaAlive = true;
        character1 = true;
      }
    }

    //Lines 359, 396, 433, and 470 Checks if a character and game are true, if so the battle can start
    if (character1 && StartGame === true) {
      //Character 1 health bar, Infernore 
      fill("yellow");
      rect(50, 600, 50, 50,);
      rect(100, 600, 50, 50,);
      rect(150, 600, 50, 50,);
      rect(200, 600, 50, 50,);
      rect(250, 600, 50, 50,);

      //Move selections shown on screen
      fill(255, 153, 51);
      rect(50, 240, 150, 50);
      rect(50, 180, 150, 50);
      rect(50, 300, 150, 50);
      fill("black");
      textSize(20);
      text('2.Hard knukle',54, 260, 150, 50);
      text('1.Flame Remix',54, 200, 150, 50);
      text('3.Inferno Buster',54, 320, 150, 50);

      //Ground sprite
      fill(color(174, 255, 74));
      ellipse(370, 440, 300, 100);

      //Character Sprite
      image(Infernore, 270, 270, 200, 200);
    }
  }

  if (key === "j") {
    if(StartGame === true) {
      if(charaAlive === false) {
        charaAlive = true;
        character2 = true;
      }
    }

    if (character2 && StartGame === true) {
      //Character 2 health bar, Cuboo
      fill(51, 255, 51);
      rect(50, 600, 50, 50,);
      rect(100, 600, 50, 50,);
      rect(150, 600, 50, 50,);
      rect(200, 600, 50, 50,);
      rect(250, 600, 50, 50,);

      //Move selections shown
      fill(51, 255, 51);
      rect(50, 240, 150, 50);
      rect(50, 180, 150, 50);
      rect(50, 300, 150, 50);
      fill("black");
      textSize(20);
      text('2.Drain Whip',54, 260, 150, 50);
      text('1.Vine Lash',54, 200, 150, 50);
      text('3.Jungles Wrath',54, 320, 150, 50);

      //Ground sprite
      fill(color(174, 255, 74));
      ellipse(370, 440, 300, 100);

      //Character sprite
      image(Cuboo, 270, 270, 200, 200);
    }
  }

  if (key === "a") {
    if(StartGame === true) {
      if(charaAlive === false) {
        charaAlive = true;
        character3 = true;
      }
    }

    if (character3 && StartGame === true) {
      //Character 3 health bar, Babara
      fill(85, 145, 213);
      rect(50, 600, 50, 50,);
      rect(100, 600, 50, 50,);
      rect(150, 600, 50, 50,);
      rect(200, 600, 50, 50,);
      rect(250, 600, 50, 50,);

      //Move selections shown
      fill(85, 145, 213);
      rect(50, 240, 150, 50);
      rect(50, 180, 150, 50);
      rect(50, 300, 150, 50);
      fill("black")
      textSize(17);
      text('2.Wave Dance',54, 260, 150, 50);
      text('1.Drown',54, 200, 150, 50);
      text('3.Abyssal Depths',54, 320, 150, 50);

      //Ground sprite
      fill(color(174, 255, 74));
      ellipse(370, 440, 300, 100);

      //Character Sprite
      image(Babara, 270, 270, 200, 200);
    }
  }

  if (key === "y") {
    if(StartGame === true) {
      if(charaAlive === false) {
        charaAlive = true;
        character4 = true;
      }
    }

    if (character4 && StartGame === true) {
      //Character 4 health bar, Poppi
      fill(169, 60, 252);
      rect(50, 600, 50, 50,);
      rect(100, 600, 50, 50,);
      rect(150, 600, 50, 50,);
      rect(200, 600, 50, 50,);
      rect(250, 600, 50, 50,);

      //Move selections shown
      fill(169, 60, 252);
      rect(50, 240, 150, 50);
      rect(50, 180, 150, 50);
      rect(50, 300, 150, 50);
      fill("black");
      textSize(20);
      text('2.Twilight Time',54, 260, 150, 50);
      text('1.Slash',54, 200, 150, 50);
      text('3.Luna Blast',54, 320, 150, 50);

      //Ground sprite
      fill(color(174, 255, 74));
      ellipse(370, 440, 300, 100);

      //Character Sprite
      image(Poppi, 270, 270, 200, 200);
    }
  }
    
  //From lines 505 to 665;
  //Lets player selects a move by pressing 1,2, or 3
  //Makes sure only 3 moves are active based on which character the player has choosen
  //Showns text box top left when a move is being used
  //Changes enemys health and the calls the ChackEnemyHealth function
  //Move 1
  if (key === "1") {
    if (character1 && StartGame === true) {
      stroke("yellow");
      strokeWeight(7);
      fill("black");
      rect(50, 50, 600, 70);
      noStroke();
      fill("yellow");
      textSize(40);
      text('Infernore  used  Hard  Knukle!', 60, 60, 600, 70);
      enemyhealth = enemyhealth - 15;
      CheckEnemyHealth();
    }
    else if (character2 && StartGame === true) {
      stroke("green");
      strokeWeight(7);
      fill("black");
      rect(50, 50, 600, 70);
      noStroke();
      fill("Green");
      textSize(40);
      text('Cuboo  used  Vine  Lash!', 60, 60, 600, 70);
      enemyhealth = enemyhealth - 15;
      CheckEnemyHealth();
    }
    else if (character3 && StartGame === true) {
      stroke("blue");
      strokeWeight(7);
      fill("black");
      rect(50, 50, 600, 70);
      noStroke();
      fill("Blue")
      textSize(40);
      text('Babara  used  Drown!', 60, 60, 600, 70);
      enemyhealth = enemyhealth - 15;
      CheckEnemyHealth();
    }
    else if (character4 && StartGame === true) {
      stroke("purple");
      strokeWeight(7);
      fill("black")
      rect(50, 50, 600, 70);
      noStroke();
      fill("purple")
      textSize(40);
      text('Poppi  used  Slash!', 60, 60, 600, 70);
      enemyhealth = enemyhealth - 15;
      CheckEnemyHealth();
    }
  }
    
  //Move 2
  if (key === "2") {
    if (character1 && StartGame === true) {
      stroke("yellow");
      strokeWeight(7);
      fill("black");
      rect(50, 50, 600, 70);
      noStroke();
      fill("yellow");
      textSize(40);
      text('Infernore  used  Flame Remix!', 60, 60, 600, 70);
      enemyhealth = enemyhealth - 35;
      health1 = health1 - 10;
      CheckEnemyHealth();
    }
    else if (character2 && StartGame === true) {
      stroke("green");
      strokeWeight(7);
      fill("black");
      rect(50, 50, 600, 70);
      noStroke();
      fill("Green");
      textSize(40);
      text('Cuboo  used  Drain  Whip!', 60, 60, 600, 70);
      enemyhealth = enemyhealth - 10;
      health2 = health2 + 20;
      CheckEnemyHealth();
    }
    else if (character3 && StartGame === true) {
      stroke("blue");
      strokeWeight(7);
      fill("black");
      rect(50, 50, 600, 70);
      noStroke();
      fill("Blue")
      textSize(40);
      text('Babara  used  Hail  Storm!', 60, 60, 600, 70);
      enemyhealth = enemyhealth - 22;
      CheckEnemyHealth();
    }
    else if (character4 && StartGame === true) {
      stroke("purple");
      strokeWeight(7);
      fill("black")
      rect(50, 50, 600, 70);
      noStroke();
      fill("purple")
      textSize(40);
      text('Poppi  used  Twilight  Time!', 60, 60, 600, 70);
      enemyhealth = enemyhealth -10;
      health4 = health4 + 20;
      CheckEnemyHealth();
    }
  }
    
  //Move3
  if (key === "3") {
    if (character1 && StartGame === true) {
      stroke("yellow");
      strokeWeight(7);
      fill("black");
      rect(50, 50, 600, 70);
      noStroke();
      fill("yellow");
      textSize(40);
      text('Infernore  used  Inferno  Buster!', 60, 60, 600, 70);
      enemyhealth = enemyhealth - 50;
      health1 = health1 - 25;
      CheckEnemyHealth();
    }
    else if (character2 && StartGame === true) {
      stroke("green");
      strokeWeight(7);
      fill("black");
      rect(50, 50, 600, 70);
      noStroke();
      fill("Green");
      textSize(40);
      text('Cuboo  used  Jungles  Wrath!', 60, 60, 600, 70);
      enemyhealth = enemyhealth - 35;
      health2 = health2 - 15;
      CheckEnemyHealth();
    }
    else if (character3 && StartGame === true) {
      stroke("blue");
      strokeWeight(7);
      fill("black");
      rect(50, 50, 600, 70);
      noStroke();
      fill("Blue")
      textSize(40);
      text('Babara  used  Abyssal  Depths!', 60, 60, 600, 70);
      enemyhealth = enemyhealth - 30;
      CheckEnemyHealth();
    }
    else if (character4 && StartGame === true) {
      stroke("purple");
      strokeWeight(7);
      fill("black")
      rect(50, 50, 600, 70);
      noStroke();
      fill("purple")
      textSize(40);
      text('Poppi  used  Luna  Blast!', 60, 60, 600, 70);
      enemyhealth = enemyhealth - 50;
      health4 = health4 - 25;
      CheckEnemyHealth();
    }
  }
}
