function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.r = 15;
  this.toDelete = false;

  this.show = function() {
    push();
    fill(255);
    strokeWeight(3);
    stroke(255);
    line(this.x, this.y, this.x, this.y + this.r);
    pop();
  }

  this.move = function() {
    this.y -= 5;
  }

  this.hits = function(alien) {
    var d = dist(this.x, this.y, alien.x, alien.y);
    if (d < this.r + alien.r){
      return true;
    } else{
      return false;
    }
  }

  this.explode = function() {
    this.toDelete = true;
  }
}
