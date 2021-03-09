class GameController {
  constructor() {
    // init model classes
    this.player = new Player(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 100, 100, 'red');

    // init view classes
    this.main_drawer = new MainDrawer();
    this.entity_drawer = new EntityDrawer();

    // init controller classes
  }

  update() {
    this.player.update();
  }

  draw() {
    this.main_drawer.clear_screen();
    this.entity_drawer.draw_player(this.player.get_attributes());
  }
}