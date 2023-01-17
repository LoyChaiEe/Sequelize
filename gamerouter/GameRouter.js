class GameRouter {
  constructor(gameController, express){
    this.controller = gameController;
    this.express = express
  }

  route = () => {
    let router = this.express.Router()

    router.get('/', this.controller.list)
    router.post('/', this.controller.add)
    router.put("/:name", this.controller.edit);
    router.delete("/:name", this.controller.delete);

    return router
  }
}

module.exports = GameRouter