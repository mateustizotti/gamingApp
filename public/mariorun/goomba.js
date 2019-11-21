function Goomba() {
    this.x = width;
    this.y = 300;
    this.size = 40;
    this.vel = -5;

    this.show = function () {
        image(gImg, this.x, this.y, this.size, this.size);

    }

    this.move = function () {
        this.x += this.vel;

    }

    this.isOffScreen = function () {
        if (this.x < -40) {
            return true;
        } else {
            return false;
        }

    }

    this.hits = function (mario) {
        let d = dist(this.x, this.y, mario.x, mario.y);
        if (d < this.size / 2 + mario.size / 2) {
            return true;
        }

    }


}