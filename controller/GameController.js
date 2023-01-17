class GameController {
  constructor() {
    this.gamesArr = ["Destiny 2", "Yakuza Kiwami", "Yakuza Kiwami 2"];
  }

  list = (req, res) => {
    res.send({ games: this.gamesArr });
  };

  add = (req, res) => {
    let item = req.body.game; // we will be sending a json object with game as its properties
    this.gamesArr.push(item);
    res.send({ games: this.gamesArr });
  };

  edit = (req, res) => {
    let replace = req.params.name;
    let item = req.body.game;
    let index = this.gamesArr.indexOf(replace);
    if(index === -1){
      res.send("this game does not exist");
    }
    else{
      this.gamesArr.splice(index, 1, item);
      res.send({ games: this.gamesArr });
    }
  };

  delete = (req, res) => {
    let replace = req.params.name;
    let index = this.gamesArr.indexOf(replace);
    if (index === -1) {
      res.send('this game does not exist')
    } else {
      this.gamesArr.splice(index, 1);
      res.send({ games: this.gamesArr });
    }
  };
}

module.exports = GameController