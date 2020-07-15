'use strict';
const {
  Model
} = require('sequelize');
const { encrypt } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    organization: {
      type:DataTypes.STRING,
      defaultValue: 'Hacktiv8'
    },
  }, {
    sequelize,
    hooks:{
      beforeCreate(user){
        user.password = encrypt(user.password)
      }
    },
    modelName: 'User',
  });
  return User;
};