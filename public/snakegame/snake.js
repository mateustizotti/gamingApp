function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  this.isAlive = true;

  this.show = function(){
    fill(255);
    noStroke();
    for (var i = 0; i < this.tail.length; i++){
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }

  this.update = function() {
    if (this.total === this.tail.length){
      for (var i = 0; i < this.tail.length-1; i++){
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total-1] = createVector(this.x, this.y);

    this.x += this.xspeed * scl;
    this.y += this.yspeed * scl;
  }

  this.dir = function(xdir, ydir) {
    this.xspeed = xdir;
    this.yspeed = ydir;
  }

  this.eat = function(food) {
    var d = dist(this.x, this.y, food.pos.x, food.pos.y);
    if (d < 1){
      this.total ++
      return true;
    } else {
      return false;
    }
  }

  this.checkGame = function() {
    for (var i = 0; i < this.tail.length; i++){
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1){
        this.isAlive = false;
      }
    }
    if (this.x > width - scl || this.x < 0){
      this.isAlive = false;
    } else if (this.y > height + scl || this.y < 0) {
      this.isAlive = false;
    }
  }


  this.startOver = function() {
    this.total = 0;
    this.tail = [];
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    food.pickLocation();
  }

}
