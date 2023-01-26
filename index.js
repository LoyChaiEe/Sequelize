// require Express NPM library
const express = require("express");

// initialise Express
const app = express();

// connect db
const db = require('./db/models/index')
const { fruit, address, cart, ordered_fruit, orders, users} = db;

//Setting up Controller and router
const FruitController = require('./controller/FruitController')
const fruitController = new FruitController(fruit);

const FruitRouter = require("./routers/FruitRouter");
const fruitRouter = new FruitRouter(fruitController, express); 

//Setting up middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/fruit", fruitRouter.route());
//If page is not found (error handling)
app.use('/', (req,res) => {
  res.send("ERROR 404 NOT FOUND")
})

app.listen(8080, () => {
  console.log("Server running on localhost8080")
})

