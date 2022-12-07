//info
let bg;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");
  bg = loadImage('bg1.png');

}

function draw() {
  background(bg);
}
