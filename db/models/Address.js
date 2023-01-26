const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associatiate(models){
      this.belongsTo(models.users, {foreignKey: "users_id"}) // Good practice to make sure the foreign key naming convention same as migration and see
    }
  }
  Address.init(
    {
      address: DataTypes.STRING,
      users_id: {
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
      underscored: true, //needed for conversion of javascirpts' camelcase naming convention to SQL's snake case naming convention
    }
  );
  return Address;
};
