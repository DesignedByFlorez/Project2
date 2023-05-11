const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class list extends Model {}

list.init(
  {
    listname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    },

{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'list',
  }
);

    module.exports = list;
