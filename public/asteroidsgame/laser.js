function Laser(spos, angle) {
  this.pos = createVector(spos.x, spos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(9);


  this.shot = function() {
    push()
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
    pop();
  }

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.hits = function(asteroid) {
    var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
    if (d < asteroid.r){
      return true;
    } else {
      return false;
    }
  }

  this.offScreen = function() {
    if (this.pos.x > width || this.pos.y > height){
      return true;
    } else if (this.pos.x < 0 || this.pos.y < 0){
      return true;
    } else {
      return false;
    }

  }



}
