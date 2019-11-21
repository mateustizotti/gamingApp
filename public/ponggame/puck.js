function Puck() {
    this.pos = createVector(0, 0);
    this.vel = p5.Vector.random2D();
    this.r = 7

    this.show = function () {
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }

    this.move = function () {
        this.vel.setMag(7);
        this.pos.add(this.vel);
    }

    this.edges = function () {
        if (this.pos.y >= height / 2 || this.pos.y <= - height / 2) {
            this.vel.y *= -1;
        }
    }

    this.hitsLeft = function (pong1) {
        if (this.pos.y - this.r < pong1.y + pong1.h / 2 &&
            this.pos.y + this.r > pong1.y - pong1.h / 2 &&
            this.pos.x - this.r < pong1.x + pong1.w / 2) {
            if (this.pos.x > pong1.x) {
                let diff = this.pos.y - (pong1.y - pong1.h / 2);
                let rad = radians(45);
                let angle = map(diff, 0, pong1.h, -rad, rad);
                this.vel.x = 20 * Math.cos(angle);
                this.vel.y = 20 * Math.sin(angle);
                this.pos.x = pong1.x + pong1.w / 2 + this.r;
            }
        }
    }

    this.hitsRight = function (pong2) {
        if (this.pos.y - this.r < pong2.y + pong2.h / 2 &&
            this.pos.y + this.r > pong2.y - pong2.h / 2 &&
            this.pos.x + this.r > pong2.x - pong2.w / 2) {
            if (this.pos.x < pong2.x) {
                let diff = this.pos.y - (pong2.y - pong2.h / 2);
                let angle = map(diff, 0, pong2.h, radians(225), radians(135));
                this.vel.x = 20 * Math.cos(angle);
                this.vel.y = 20 * Math.sin(angle);
                this.pos.x = pong2.x - pong2.w / 2 - this.r;
            }
        }
    }

    this.scores = function () {
        if (this.pos.x < - width / 2) {
            score2++;
            this.reset();
        } else if (this.pos.x > width / 2) {
            score1++;
            this.reset();
        }
        
    }



    this.reset = function() {
        this.pos = createVector(0, 0);
        this.vel = createVector();
        let angle = random(-PI/2, PI/4);
        this.vel.x = 10 * Math.cos(angle);
        this.vel.y = 10 * Math.sin(angle);

        if (random(1) < 0.5) {
            this.vel.x *= -1;

        }

    }
}