const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fruits extends Model {}
  Fruits.init({
    name: DataTypes.STRING,
    taste: DataTypes.STRING,
    colour: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "fruits",
    underscored: true
  });
  return Fruits
}