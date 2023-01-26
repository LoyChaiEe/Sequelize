const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  //Singular naming for model as you are representing one instance of fruit
  class Fruit extends Model {}
  Fruit.init({
    name: DataTypes.STRING,
    taste: DataTypes.STRING,
    colour: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "fruit", //VERY IMPORTANT TO REMEMBER THIS NAMING FOR DB destructering also must name based on the model name
    underscored: true
  });
  return Fruit
}