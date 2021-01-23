class Level1 {
    constructor() {
        this.count = 0;
        this.heroimg = loadImage("images/Level1/hero.png")
    }
    display() {
        background(background1);
        hero = createSprite(displayWidth / 2 - 50, displayHeight / 2 - 50, 10, 10);
        hero.addImage(this.heroimg);
        villain = createSprite(662,436 , 10, 10)
        villain.addImage( alien1);
        villain.scale=0.5;
        bullet1 = createSprite(-100, -100);
        bullet2 = createSprite(-100, -100);
        bullet3 = createSprite(-100, -100);
        bullet4 = createSprite(-100, -100);
        bullet5 = createSprite(-100, -100);
        this.heroMove();
        this.heroShoot();
        if (bullet1.isTouching(villain) ||
            bullet2.isTouching(villain) ||
            bullet3.isTouching(villain) ||
            bullet4.isTouching(villain) ||
            bullet5.isTouching(villain)) {
            this.count += 1;
        }
    }
    heroMove() {
        if (keyDown("right")) {
            hero.x = 3;
        }
        if (keyDown("left")) {
            hero.x = -3
        }
        if (keyDown("up")) {
            hero.y = -3
            if (keyDown("down")) {
                hero.y = 3
            }
        }
    }

    heroShoot() {
        if (keyWentDown("space")) {
            this.count += 1;
            if (this.count == 1) {
                bullet1.x = hero.x - 40;
                bullet1.y = hero.y;
                bullet1.velocityX = 15;
            }
            if (this.count == 1) {
                bullet2.x = hero.x - 40;
                bullet2.y = hero.y;
                bullet2.velocityX = 15;
            }
            if (this.count == 1) {
                bullet3.x = hero.x - 40;
                bullet3.y = hero.y;
                bullet3.velocityX = 15;
            }
            if (this.count == 1) {
                bullet4.x = hero.x - 40;
                bullet4.y = hero.y;
                bullet4.velocityX = 15;
            }
            if (this.count == 1) {
                bullet5.x = hero.x - 40;
                bullet5.y = hero.y;
                bullet5.velocityX = 15;
                //when the bullwt count gets to 5, rset it ack to 0
                this.count = 0;
            }
        }
    }

}
