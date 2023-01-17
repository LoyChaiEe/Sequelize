const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associatiate(models) {
      this.belongsTo(models.users, { foreignKey: "users_id" }); // the foreign key name can be any name?
    }
  }
  Orders.init(
    {
      users_id: {
        //same with model column, but does it have to reflect name of foreign key
        type: DataTypes.INTEGER,
        references: {
          model: "users", //reference need to reference the exact name of model on column
          key: "id",
        },
      },
      total: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "orders",
      underscored: true,
    }
  );
  return Orders;
};
