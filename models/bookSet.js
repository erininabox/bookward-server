'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookSet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  bookSet.init({
    bookID: DataTypes.INTEGER,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    yearPub: DataTypes.STRING,
    description: DataTypes.STRING
  },
  {
    sequelize,
    modelName: 'bookSet',
  });
  return bookSet;
};