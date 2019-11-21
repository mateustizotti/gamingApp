function Food() {
  this.pos = createVector();


  this.show = function() {
    image(apple, this.pos.x, this.pos.y, scl, scl);

    //noStroke();
    //fill(255, 0, 200);
    //rect(this.pos.x, this.pos.y, scl, scl);
  }

  this.pickLocation = function() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    var x =  floor(random(cols));
    var y =  floor(random(rows));

    this.pos.x = x;
    this.pos.y = y;
    this.pos.x *= scl;
    this.pos.y *= scl;
  }
}
