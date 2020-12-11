'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shoe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Shoe.belongsTo(models.User, { foreignKey: "userId" });
    }
  };
  Shoe.init({
    brand: DataTypes.STRING,
    make: DataTypes.STRING,
    colorway: DataTypes.STRING,
    retailPrice: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    imageLink: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shoe',
  });
  return Shoe;
};