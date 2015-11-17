//Javascript Document

// sprite variables
var
    turkeySprite,
    backgroundSprite,
    foregroundSprite,
    bottomObstacleSprite,
    topObstacleSprite,
    splashScreenSprite,
    textSprites,
    okButtonSprite;


// sprite constructor
function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x * 2;
    this.y = y * 2;
    this.width = width * 2;
    this.height = height * 2;
}

// define draw method (prototype)
Sprite.prototype.draw = function (renderingContext, x, y) {
    renderingContext.drawImage(this.img, this.x, this.y, this.width, this.height, x, y, this.width, this.height);

};
// initialize sprites
function initSprites(img) {
    turkeySprite = [
        new Sprite(img, 0, 0, 66, 46),
        new Sprite(img, 0, 56, 66, 46),
        new Sprite(img, 0, 102, 66, 46)
    ];
    //backgroundSprite.color = "#ABE1EE";
    backgroundSprite = new Sprite(img, 67, 0, 300, 246);
    foregroundSprite = new Sprite(img, 67, 246, 299, 13);
    okButtonSprite = new Sprite(img, 0, 95, 64, 51);

    textSprites = {
        floppyTurkey: new Sprite(img, 59, 114, 96, 22),
        gameOver: new Sprite(img, 59, 136, 94, 19),
        getReady: new Sprite(img, 59, 155, 87, 22)
    };
}