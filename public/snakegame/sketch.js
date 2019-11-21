var snake;
var scl = 20;
var food;
var scoreElem;
var prevScore = 0;
var apple;
let font;

function preload() {
  apple = loadImage("images/apple.png");
  font = loadFont("assets/prstart.ttf");
}

function setup() {
  createCanvas(600, 600);
  textFont(font);
  frameRate(10);
  snake = new Snake();
  food = new Food();
  food.pickLocation();
}

function draw() {
  background(51);
  if (snake.isAlive) {
    snake.show();
    snake.checkGame();
    snake.update();
    text("SCORE = " + prevScore, 20, 30);
  } else {
    text('GAME ENDED! YOUR SCORE WAS: ' + prevScore, 20, 30);
    noLoop();
  }
  food.show();
  if (snake.eat(food)) {
    this.updateScore();
    food.pickLocation();
  }

}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  } else if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  }
}

this.updateScore = function () {
  prevScore++;
}
