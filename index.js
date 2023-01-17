// require Express NPM library
const express = require("express");

// Declare the port to listen to and initialise Express
const PORT = 3000;
const app = express();

//Setting up Controller and router
const GameController = require('./controller/GameController')
const gameController = new GameController()

const GameRouter = require('./gamerouter/GameRouter')
const gameRouter = new GameRouter(gameController, express)

//Setting up middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/game', gameRouter.route())
//If page is not found (error handling)
app.use('/', (req,res) => {
  res.send("ERROR 404 NOT FOUND")
})

app.listen(8080, () => {
  console.log("Server running on localhost8080")
})

