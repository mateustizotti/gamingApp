var mario;
var goombas = [];
let mImg;
let bImg;
let gImg;
let font;
let score = 0;
let spritesheet;
let spritedata;
let animation = [];

function preload() {
  mImg = loadImage("Images/mario.png");
  bImg = loadImage("Images/background.png");
  gImg = loadImage("Images/goomba.png");
  font = loadFont("assets/prstart.ttf");
  spritedata = loadJSON("assets/mario.json");
  spritesheet = loadImage("Images/mario_sprite.png");
}

function setup() {
  createCanvas(800, 400);
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }
  textFont(font);
  mario = new Mario(animation);
}

function draw() {
  
  background(bImg);
  if (mario.isAlive) {
    fill(0);
    text("SCORE = " + score, 10, 30);
  } else {
    fill(0);
    text("GAME ENDED! YOUR SCORE WAS: " + score, 10, 30);
    noLoop();
  }

  mario.show();
  mario.update();

  if (random(0.8) < 0.009) {
    goombas.push(new Goomba());
  }

  for (let i = goombas.length - 1; i >= 0; i--) {
    goombas[i].show();
    goombas[i].move();

    if (goombas[i].hits(mario)) {
      mario.isAlive = false;
    }

    if (goombas[i].isOffScreen()) {
      goombas.splice(i, 1);
    }

  }


  score++
}

function keyPressed() {
  if (key == " ") {
    mario.up();
  }

}