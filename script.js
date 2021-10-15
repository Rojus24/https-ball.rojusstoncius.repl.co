var x, y, vx, vy;
var x2, y2, vx2, vy2;

function setup() {
  createCanvas(400, 300);

  x = 0;
  y = 150;
  vx = 6;
  vy = 6;
  x2 = 0
  y2 = 200
  vx2 = 5
  vy2 = 5
}

function draw() {
  background(225);

  ellipse(x, y, 50, 50);
  x = x + vx;
  y = y + vy;

  if (x <= 0 || x >= width) {
    vx = vx * -1;
  }

  if (y <= 0 || y >= height) {
    vy = vy * -1;
  }

  ellipse(x2, y2, 50, 50);
  x2 = x2 + vx2;
  y2 = y2 + vy2;

  if (x2 <= 0 || x2 >= width) {
    vx2 = vx2 * -1;
  }

  if (y2 <= 0 || y2 >= height) {
    vy2 = vy2 * -1;
  }
}
