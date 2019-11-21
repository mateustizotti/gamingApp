var ship;
var aliens = [];
var bullets = [];
var torpedos = [];
var n = 8;
var alienImages = [];
var shipImg;
var explosion;
var scoreElem;
var score = 0;
let font;

function preload() {
  shipImg = loadImage("images/ship.png")
  explosion = loadImage("images/explosion.png")
  alienImages[0] = loadImage("images/alien0.png");
  alienImages[1] = loadImage("images/alien1.png");
  font = loadFont("assets/prstart.ttf");
}

function setup(){
  createCanvas(600 , 600);
  textFont(font);

  ship = new Ship();
  for (var i = 0; i < n; i++){
    aliens[i] = new Alien(i*60+(width/n), 60);
  }

}

function draw(){
  background(0);
  fill(255);
  if(ship.isAlive){
    text("SCORE = " + score, 250 , 30);
  } else {
    text("GAME ENDED! YOUR SCORE WAS: " + score, 130 , 30);
    noLoop();
  }
  ship.show();
  ship.move()

  for (var i = 0; i < bullets.length; i++){
    bullets[i].show();
    bullets[i].move();

    for (var j = 0; j < aliens.length; j++){
      if (bullets[i].hits(aliens[j])){
        aliens[j].die();
        bullets[i].explode();
      }
    }
  }

  var right = false;
  var left = false;
  for (var i = 0; i < aliens.length; i++){
    aliens[i].show();
    aliens[i].move();
    if (aliens[i].x > width - 30){
      right = true;
      left = false;
    }
    if (aliens[i].x < 30){
      right = false;
      left = true;
    }
  }

  if (right){
    for (var i = 0; i < aliens.length; i++){
      aliens[i].shiftDown();
    }
  }
  if (left){
    for (var i = 0; i < aliens.length; i++){
      aliens[i].shiftUp();
    }
  }

  if(frameCount % 100 == 0){
    let a = random(aliens);
    let b = random(aliens);
    let c = random(aliens);

    torpedos.push(new Torpedo(a.x, a.y));
    torpedos.push(new Torpedo(b.x, b.y));
    torpedos.push(new Torpedo(c.x, c.y));
  }

  for (let i = torpedos.length - 1; i >= 0; i--){
    torpedos[i].show();
    torpedos[i].move();
    if (torpedos[i].hits(ship)){
      ship.explode();
      ship.show();
    }
  }

  for (var i = bullets.length-1; i >= 0; i--){
    if(bullets[i].toDelete){
      bullets.splice(i, 1);
    }
  }

  for (var i = aliens.length-1; i >= 0; i--){
    if(aliens[i].toDelete){
      aliens.splice(i, 1);
      score ++;
    }
  }

  if (aliens.length < 1){
    let n = 8;
    for (var i = 0; i < n; i++){
      aliens[i] = new Alien(i*60+(width/n), 60);
    }
  }

}

function keyReleased(){
  ship.setDir(0);
}

function keyPressed(){
  if (key === " "){
    var bullet = new Bullet(ship.x, ship.y);
    bullets.push(bullet)
  } else if (keyCode === RIGHT_ARROW){
    ship.setDir(1);
  } else if(keyCode === LEFT_ARROW){
    ship.setDir(-1);
  }

}
