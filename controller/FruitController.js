class FruitController {
  constructor(model) {
    this.model = model;
    console.log(this.model);
  }

  list = async (req, res) => {
    let data = await this.model.findAll() //Query line same as SELECT * FROM "model name" in SQL
    res.json({ fruit: data, message: "GET REQUEST SUCCESSFUL" });
  };

  add = async (req, res) => {
    let item = req.body;
    let fruitAdd = await this.model.create(item); //check purpose of this line
    let data = await this.model.findAll(); //Query line same as SELECT * FROM "model name" in SQL
    this.gamesArr.push(item);
    res.json({ fruit: data, message: "POST REQUEST SUCCESSFUL" });
  };

  edit = async (req, res) => {
    let item = req.body;
    let fruitToReplace = req.params.id;
    let fruitToEdit = await this.model.findByPK(fruitToReplace); //Query line 
    await fruitToEdit.update(item);
    let data = await this.model.findAll(); //Query line same as SELECT * FROM "model name" in SQL
    if (index === -1) {
      res.send("ERROR 404. Fruit data does not exist");
    } else {
      res.json({ fruit: data, message: "PUT REQUEST SUCCESSFUL" });
    }
  };

  delete = async (req, res) => {
    let fruitToDelete = req.params.id;
    await this.model.destroy({ where: fruitToDelete });
    let data = await this.model.findAll(); //Query line same as SELECT * FROM "model name" in SQL
    res.json({ fruit: data, message: "DELETE REQUEST SUCCESSFUL" });
  };
}

module.exports = FruitController