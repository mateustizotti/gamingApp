var ship;
var asteroids = [];
var lasers = [];
var total = 10;
var font;
var score = 0;

function preload() {
  font = loadFont("assets/prstart.ttf");

}

function setup() {
  createCanvas(screen.width, screen.availHeight);
  textFont(font);
  ship = new Ship();

  for (var i = 0; i < total; i++){
    asteroids.push(new Asteroid());
  }

}

function draw() {
  background(0);

  if(asteroids.length < 1){
    for (var i = 0; i < total; i++){
      asteroids.push(new Asteroid());
    }
  }
  for (var i = asteroids.length - 1; i >= 0; i--){
    if (ship.hits(asteroids[i])){
      ship.isAlive = false;
    }
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }


  for (var i = lasers.length - 1; i >= 0; i--){
    lasers[i].shot();
    lasers[i].update();
    if (lasers[i].offScreen()){
      lasers.splice(i, 1);
    } else {
      for (var j = asteroids.length - 1; j >= 0; j--){
        if(lasers[i].hits(asteroids[j])) {
          if (asteroids[j].r > 20){
            var newAsteroids = asteroids[j].breakUp();
            asteroids = asteroids.concat(newAsteroids);
            score += 100;
          }
          asteroids.splice(j, 1);
          lasers.splice(i, 1);
          break;
        }
      }
    }
  }
  if(ship.isAlive){
    fill(255);
    text("SCORE = " + score, width/2 - 50, 30);
    ship.render();
    ship.turn();
    ship.update();
    ship.edges();
  } else {
    fill(255);
    text("GAME ENDED! YOUR SCORE WAS: " + score, width/2 - 150, 30);
    noLoop();
  }
}

function keyReleased() {
  ship.setRotation(0);
  ship.boosting(false);
}

function keyPressed() {
  if (key == ' '){
    lasers.push(new Laser(ship.pos, ship.heading));
  } else if(keyCode == RIGHT_ARROW){
    ship.setRotation(0.1);
  } else if (keyCode == LEFT_ARROW){
    ship.setRotation(-0.1);
  } else if (keyCode == UP_ARROW){
    ship.boosting(true);
  }
}
