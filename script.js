class Ball {
  constructor(x, y, w, h, vx, vy) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
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
