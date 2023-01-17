const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associatiate(models){
      this.belongsTo(models.users, {foreignKey: "users_id"}) // the foreign key name can be any name?
    }
  }
  Address.init(
    {
      address: DataTypes.STRING,
      users_id: { //same with model column, but does it have to reflect name of foreign key
        type: DataTypes.INTEGER,
        references: {
          model: "users", //reference need to reference the exact name of model on column
          key: 'id'
        }
      },
    },
    {
      sequelize,
      modelName: "address",
      underscored: true,
    }
  );
  return Address;
};
