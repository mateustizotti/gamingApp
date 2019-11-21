function Torpedo(x, y) {
  this.x = x;
  this.y = y;
  this.r = 15;
  this.toDelete = false;

  this.show = function() {
    push();
    fill(0, 200, 0);
    strokeWeight(3);
    stroke(0, 200, 0);
    line(this.x, this.y, this.x, this.y + this.r);
    pop();
  }

  this.move = function() {
    this.y += 5;
  }

  this.hits = function(ship) {
    var d = dist(this.x, this.y, ship.x, ship.y);
    if (d < this.r + ship.size - 20){
      return true;
    } else{
      return false;
    }
  }
}
