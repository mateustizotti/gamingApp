let puck;
let pong1, pong2;
let font;
let score1 = 0;
let score2 = 0;


function preload() {
  font = loadFont("assets/prstart.ttf");
}

function setup() {
  createCanvas(600, 500);
  pong1 = new Pong(-width / 2 + 20);
  pong2 = new Pong(width / 2 - 20);
  puck = new Puck();
}


function draw() {
  background(0);
  translate(width / 2, height / 2);
  textFont(font);
  textSize(19);
  textAlign(CENTER);
  text(score1, -30, -height / 2 + 30);
  text(score2, 30, -height / 2 + 30);

  for (let i = -height / 2; i <= height / 2; i++) {
    fill(255);
    stroke(255);
    strokeWeight(5);
    line(0, i * 20, 0, i * 20);
  }

  puck.hitsLeft(pong1);
  puck.hitsRight(pong2);
  puck.show();
  puck.move();
  puck.edges();
  puck.scores();

  pong1.show();
  pong1.update();
  pong2.show();
  pong2.update();

}

function keyReleased() {
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
    pong2.setDir(0);
  }

  if (keyCode == "81" || keyCode == "65") {
    pong1.setDir(0);
  }

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    pong2.setDir(-5);
  } else if (keyCode === DOWN_ARROW) {
    pong2.setDir(5);
  } else if (keyCode == "81") {
    pong1.setDir(-5);
  } else if (keyCode == "65") {
    pong1.setDir(5);
  }

}