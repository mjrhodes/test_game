class Player {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.x_dir = 1;
    this.y_dir = 1;
  }

  update() {
    if (this.x + this.width >= CANVAS_WIDTH || this.x <= 0) {
      this.x_dir = this.x_dir * -1;
    }
    if (this.y + this.height >= CANVAS_HEIGHT || this.y <= 0) {
      this.y_dir = this.y_dir * -1;
    }
    this.x += (5 * this.x_dir);
    this.y += (5 * this.y_dir);
  }

  get_attributes() {
    return [this.x, this.y, this.width, this.height, this.color]
  }
}