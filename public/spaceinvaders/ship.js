function Ship() {
  this.x = width/2;
  this.y = height  - 60;
  this.size = 40
  this.speed = 5;
  this.xdir = 0;
  this.isAlive = true;
  im = shipImg

  this.show = function() {
    imageMode(CENTER);
    image(im, this.x, this.y, this.size, this.size + 10);
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.move = function(dir) {
    this.x += this.xdir*4;
    if(this.x < 20) {
      this.x = 20;
    } else if (this.x > width - 20){
      this.x = width - 20;
    }
  }

  this.explode = function() {
    im = explosion;
    this.isAlive = false;
  }
}
