const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class item extends Model {}

item.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
        type:DataTypes.STRING,
        allowNull: true,
    }
    },

{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'item',
  }
);

    module.exports = item;