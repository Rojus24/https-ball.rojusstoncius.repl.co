class Ball {
  constructor(x, y, w, h, vx, vy) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
    this.color = color
  }

  draw() {
    ellipse(this.x, this.y, 50, 50);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if(this.x < 25 || this.x >= 475){
      this.vx = this.vx * -1;
    }

    if(this.y < 25 || this.y >= 375){
      this.vy = this.vy * -1;
    }
  }
}

var ball1, ball2, ball3;

function setup() {
  createCanvas(500, 400);
  
  ball1 = new Ball(30, 200, 50, 50, 5, 5,);
  ball2 = new Ball(200, 20, 80, 80, 15, 8);
  ball3 = new Ball(40, 80, 70, 70, 7, 10);
 
}


function draw() {
  background(225);

  fill ('turquoise')
  ball1.draw();
  fill ('orange')
  ball2.draw();
  fill ('green')
  ball3.draw();

 
}
