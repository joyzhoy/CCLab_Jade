let balls = [];

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(50);
  
  balls.push(new Ball(mouseX,mouseY));

  for (let i = 0; i < balls.length; i++) {
    //let b = balls[i];
    balls[i].move();
    balls[i].display();
    balls[i].bounce();
    balls[i].changeColor();
    
  }
  
  if(balls.length>30){
    balls.splice(0,1);
     
     }
  
  
  fill(255);
  //text();
  text("Number of Object: "+ balls.length,50,20);
  
  
}

//AMAZING! if mouse pressed, add a new ball at the location of mouseX, mouseY
function mousePressed() {
  balls.push(new Ball(mouseX, mouseY));
}


function keyPressed() {
  // if "D" or "d" is pressed,
  if (key == "d" || key == "D") {
    // and if there is at least one object
    if (balls.length > 0) {
      let index = 0; // the first index = the oldest object
      // remove the oldest object
      balls.splice(index, 1);
    }
  }
}

class Ball {
  //property
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dia = random(10, 30);
    this.xSpd = random(-2, 2);
    this.ySpd = random(-2, 2);
    this.isDone = false;
  }

  //how does it move, behaviors
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  bounce() {
    if (this.x < 0 || this.x > width) {
      this.xSpd = this.xSpd * -1;
    }
    if (this.y < 0 || this.y > height) {
      this.ySpd = this.ySpd * -1;
    }
  }

  changeColor() {
    if (this.x < 0 || this.x > width) {
      fill(random(255), random(255), random(255));
    }
  }
  
  // checkCanvas(){
  //   if(this.x<0||this.x>width){
  //      this.isDone = true;
  //      }
  //   if(this.y<0||this.y>height){
  //      this.isDone = true;
  //      }
  // }

  //how this ball looks like
  display() {
    ellipse(this.x, this.y, this.dia, this.dia);
    
  }
}
