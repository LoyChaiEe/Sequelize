const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associatiate(models) {
      this.belongsTo(models.users, { foreignKey: "users_id" }); // the foreign key name can be any name? and the models.users is refering to the model name or?
      this.belongsTo(models.fruits, { foreignKey: "fruit_id" });
    }
  }
  Cart.init(
    {
      users_id: {
        //same with model column, but does it have to reflect name of foreign key
        type: DataTypes.INTEGER,
        references: {
          model: "orders", //reference need to reference the exact name of model on column
          key: "id",
        },
      },
      fruit_id: {
        //same with model column, but does it have to reflect name of foreign key
        type: DataTypes.INTEGER,
        references: {
          model: "fruits", //reference need to reference the exact name of model on column
          key: "id",
        },
      },
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ordered_fruit",
      underscored: true,
    }
  );
  return Cart;
};
