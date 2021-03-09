class EntityDrawer {
  constructor() {
  }

  draw_player(attributes) {
    cc.fillStyle = attributes[4];
    cc.fillRect(attributes[0], attributes[1], attributes[2], attributes[3]);
  }
}