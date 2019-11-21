function Pong(x) {
    this.x = x;
    this.y = 0;
    this.h = 100;
    this.w = 10;
    this.vel = 0;

    this.show = function () {
        fill(255);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);

    }
    this.update = function () {
        this.y += this.vel;
        this.y = constrain(this.y, (-height/2 + 50), (height/2 - 50));
    }

    this.setDir = function (value) {
        this.vel = value;
    }
}