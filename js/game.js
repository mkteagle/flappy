var
    canvas,
    start,
    renderingContext,
    width,
    height,

    turkey,
    bg;



function main () {
    canvasSetup();
    $('body').append(canvas);
    loadGraphics();
}
function canvasSetup() {
    canvas = document.createElement("canvas");
    canvas.style.border = "1px solid #CCC";

    canvas.width = 600;
    canvas.height = 500;

    renderingContext = canvas.getContext("2d");

}
function loadGraphics() {
    turkey = new Image();
    start = new Image();
    bg = new Image();
    bg.src = './img/bg.png';
    start.src = './img/start.png';
    turkey.src = './img/turkey.png';
    turkey.onload = function () {
        renderingContext.fillRect(0, 0, 600, 500);
        renderingContext.drawImage(bg, 0, 0, 600, 500);
        renderingContext.drawImage(turkey, 10, 10);
        renderingContext.drawImage(start, 265, 215, 70, 70);
        renderingContext.fillStyle = "#9EFFFF";
        renderingContext.font = "bold 30px sans-serif";
        renderingContext.textBaseline = 'top';
        renderingContext.textAlign = 'center';
        renderingContext.fillText("Flappy Turkey", 300, 75);
    }
}

function Sprite(url, pos, size, speed, frames, dir, once) {
    this.pos = pos;
    this.size = size;
    this.speed = typeof speed === 'number' ? speed : 0;
    this.frames = frames;
    this._index = 0;
    this.url = url;
    this.dir = dir || 'horizontal';
    this.once = once;
};
var player = {
    pos: [0, 0],
    sprite: new Sprite('img/turkey.png', [0, 0], [39, 39], 16, [0, 1])
};