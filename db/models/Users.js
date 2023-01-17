const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fruit extends Model {}
  Fruit.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "users",
      underscored: true,
    }
  );
  return Fruit;
};
