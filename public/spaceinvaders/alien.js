function Alien(x, y, img) {
  this.x = x;
  this.y = y;
  this.r = 30;
  this.toDelete = false;
  this.xdir = 1;
  let im = random(alienImages);

  this.show = function(){
    image(im, this.x, this.y, this.r + 15, this.r);
  }

  this.die = function() {
    this.toDelete = true;
  }

  this.move = function() {
    this.x += this.xdir
  }

  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r
  }

  this.shiftUp = function() {
    this.xdir *= -1;
    this.y -= this.r
  }

}
