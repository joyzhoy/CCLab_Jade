//loading

let input, button, enterNum,load;
let xpos = [];
let ypos = [];
let rx = [];
let ry = [];

let R = 50;
let r = 2 * R;
let t = 100;
let s = 0.0002;
let len = 50;

let stat=true;
let timer=5;

let val;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");
  bg = loadImage('bg.jpeg');

  background(bg);

  input = createInput("0","int");
  input.position(windowWidth/2-100, windowHeight/2-150);
  input.style('background-color', 'rgb(242,205,117)');
  input.style('font-size','20px');
  input.style('width','100px');
  input.style('height','40px');
  input.style('background-image','url(text1.png)')
  input.style('background-size','cover')

  button = createButton('submit');
  button.position(input.x + input.width+10,windowHeight/2-148);
  button.mousePressed(enter);
  button.style('color', 'rgb(113,154,159)');
  button.style('font-size','20px');
  button.style('height','40px');

  enterNum = createElement('h1', 'Enter one integer that first comes to your mind.');
  enterNum.position(enterNum.width/4, windowHeight/2-300);
  enterNum.style('color', 'rgb(113,154,159)');
  enterNum.style('background-color','rgba(242,205,117,0.3)')
  enterNum.style('font-size','40px');

  load = createElement('h1', 'Loading...');
  load.position(-300,-300);
  load.style('color','rgb(255,255,255)');

  for (let i = 0; i < len; i++) {
    xpos[i] = 0;
    ypos[i] = 0;
    rx[i] = 0;
    ry[i] = 0;
  }
}

function draw() {
  if(stat){background(bg);
  }
  
  else{
  background(0,10);
  fill(255);
  taiji();
    input.position(-200,200);
    button.position(-200,-200);
    enterNum.position(-200,-200);
    load.position(windowWidth/2-80,windowHeight/2-250);

    if(frameCount % 60 == 0 && timer > 0){timer--;}
    if (timer==0){
      window.open("index2.html?param="+val,target="_self");
    }
  }


}

function enter() {
    val = input.value();
    input.value('');
    stat=false;
  }

function taiji(){
  for (let i = 0; i < xpos.length; i++) {
    xpos[i] = xpos[i + 1];
    ypos[i] = ypos[i + 1];
  }

  for (let i = 0; i < rx.length; i++) {
    rx[i] = rx[i + 1];
    ry[i] = ry[i + 1];
  }
  rx[rx.length - 1] = R * cos(t);
  ry[ry.length - 1] = R * sin(t);

  for (let i = 0; i < xpos.length; i++) {
    t += s;
    strokeWeight(6);
    stroke(255 - i * 5,100-i);
    fill(255,100 - i);
    ellipse(width / 2 + rx[i], height / 2 + ry[i], r, r);

    t += s;
    noStroke();
    fill(255 - i * 5);

    ellipse(width / 2 - rx[i], height / 2 - ry[i], r, r);
  }
}


