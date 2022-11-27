let n = [];
let v = [
  "#E7ADAC",
  "#78677A",
  "#D8B0B0",
  "#EBC1A8",
  "#CEAEB9",
  "#E9CEC3",
  "#8D7477",
  "#6E4740",
  "#A7BEC6",
  "#5B7493",
  "#BFCAC2",
  "#B98A82",
  "#9AA2AD",
  "#BEA8AA",
];
let change = false;
let move = false;
let move1 = false;
let heart = false;
let xoff = 0;
let yoff = 0;
let can;
let tankH=500;
let tankW=700;

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2-100;
  can.position(x, y);
}

function setup() {
  can = createCanvas(700, 500);
  centerCanvas();
  for (i = 0; i < 19; i++) {
    n[i] = int(random(14));
  }
}

function windowResized() {
  centerCanvas();
}

// function setup() {
//   createCanvas(600, 600);

//   for (i = 0; i < 19; i++) {
//     n[i] = int(random(14));
//   }
// }

function draw() {
  background(135,206,250,50);

  drawCreature(width / 2+20, height / 2+50);
}

function drawCreature(x, y) {
  push();
  if (!move) {
    translate(x, y);
  } else {
    xoff = xoff + random(-2, 2);
    yoff = yoff + random(-1, 1);
    translate(x + xoff, y + yoff);
  }
  // YOUR CODE GOES HERE
  // introduce additional functions
  // for parts of your creature that
  // are repeated, and call them from
  // here

    fill(color(v[n[2]]));
    beginShape();
    vertex(60, -140);
    vertex(-150, -40);
    vertex(-150, -120);
    vertex(-60, -150);

    endShape();

    fill(color(v[n[12]]));
    beginShape();
    //   vertex(-140, -90); //tail
    // vertex(-150, -120);

    // vertex(-60, -150); //yuqi
    // vertex(-50, -200); //top yuqi
    // vertex(30, -160); //yuqi
    vertex(60, -140); //yuqi

    //   vertex(120, -130); //head
    //   vertex(200, -100);
    //   vertex(210, -60);

    vertex(160, -10); //middle yuqi
    //   vertex(140,50);
    //   vertex(120, 0);

    vertex(0, 20);
    vertex(-50, 10); //body

    //   vertex(-100, 100); //bottom yuqi
    //   vertex(-120, 80);
    //   vertex(-110, 30);
    //   vertex(-90, 10); //bottom yuqi

    //   vertex(-150, -40);
    //   vertex(-140, -90); //tail

    endShape();

  //color

    noStroke();
    fill(color(v[n[0]]));
    triangle(-50, -200, 30, -160, -60, -150);
    fill(color(v[n[1]]));
    triangle(30, -160, -60, -150, 60, -140);

  // fill(color(v[n[2]]));
  // triangle(60, -140, -150, -120, -140, -90);
  // fill(color(v[n[3]]));
  // triangle(-150, -120, 60, -140, -60, -150);
  // fill(color(v[n[5]]));
  // triangle(-150, -40, -140, -90, 60, -140);

    fill(color(v[n[6]]));
    triangle(-150, -40, -90, 10, 60, -140);
    fill(color(v[n[7]]));
    triangle(-50, 10, -90, 10, 60, -140);

    fill(color(v[n[8]]));
    triangle(-50, 10, -90, 10, -110, 30);
    fill(color(v[n[9]]));
    triangle(-100, 100, -50, 10, -110, 30);
    fill(color(v[n[10]]));
    triangle(-100, 100, -120, 80, -110, 30);
  // fill(color(v[n[11]]));
  // triangle(-50, 10, 0, 20, 60, -140);
  // fill(color(v[n[12]]));
  // triangle(120, 0, 0, 20, 60, -140);
  // fill(color(v[n[13]]));
  // triangle(120, 0, 160, -10, 60, -140);

    fill(color(v[n[14]]));
    triangle(120, 0, 160, -10, 140, 50);

    fill(color(v[n[15]]));
    triangle(120, -130, 160, -10, 60, -140);
    fill(color(v[n[16]]));
    triangle(120, -130, 160, -10, 210, -60);
    fill(color(v[n[17]]));
    triangle(200, -100, 160, -10, 210, -60);
    fill(color(v[n[18]]));
    triangle(200, -100, 120, -130, 190, -70);

    //eyes
    fill(255);
    ellipse(175, -85, 30, 50);
    fill(0);
    eye_x = map(mouseX, 0, width, 170, 180);
    eye_y = map(mouseY, 0, height, -90, -80);
    circle(eye_x, eye_y, 15);

  px = mouseX - x;
  py = mouseY - y;

  // print(px, py);

  if (px >= -140 && px < 130 && py >= -143 && py <= 10) {
    heart = true;
  } else {
    heart = false;
  }
  
  if (px >= 150 && px <= 200 && py <= -65 && py >= -95) {
    stroke(0);
    fill(255);
    for (i = 0; i < 2; i++) {
      circle(random(230, 250), random(-250, -100), random(50));
    }
    noStroke();
  } 
  
  if (px >= -140 && px <= 135 && py >= -182 && py <= 6) {
    move1 = true;
  } else{move1=false;}

  if (px >= 130 && px <= 150 && py >= 0 && py <= 30) {
    change = true;
  } else {
    change = false;
  }


  //tail
  let trans = map(sin(frameCount * 0.05), -1, 1, 50, 80);
  fill(250, 84, 84, trans);
  let spd = 0.01;
  let g = 0.001;
  let w = 30;
  let start = -120;
  for (let j = start; j < start + 100; j += w) {
    freq = frameCount * spd + j * g;
    r = map(noise(freq), 0, 1, QUARTER_PI, PI);
    push();
    translate(-130, j + w / 2);
    rotate(r);
    triangle(20, 50, -10, 20, -10, 100);
    triangle(-10, 20, 80, 140, 80, 40);
    pop();
  }
  
 pop();

  noStroke();
  
  //fish tank
  fill(0);
  rect(0,0,20,tankH);
  rect(tankW-20,0,20,tankH);
  rect(0,tankH-20,tankW,20);
 
}
function mouseClicked() {
  if (change) {
    for (i = 0; i < 19; i++) {
      n[i] = int(random(14));
    }
  }
  if (move1) {
    move = !move;
  }
}

function mouseMoved() {
  fill(255, 0, 0);
  if (heart) {
    h(random(300, 500), random(0, 100), random(30));
  }
}

//https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg
function h(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}
