function Mario(animation) {
  this.x = 50;
  this.y = 285;
  this.size = 40;
  this.speed = 0;
  this.gravity = 0.9;
  this.isAlive = true;
  this.animation = animation;
  this.len = this.animation.length;
  this.index = 0;

  this.show = function () {
    let index = floor(this.index) % this.len;
    image(this.animation[index], this.x, this.y, this.size, this.size + 15  );
  }

  this.update = function () {
    this.y += this.speed;
    this.speed += this.gravity;
    this.y = constrain(this.y, 0, 285);
    this.index += 0.25;

  }

  this.up = function () {
    if (this.y == 285) {
      this.speed = -17;
    }
  }



}
