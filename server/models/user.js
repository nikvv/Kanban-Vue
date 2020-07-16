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
      User.hasMany(models.Task,{foreignKey:'user_id'})
    }
  };
  User.init({
    username: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:true
      }
    },
    email: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:true,
        isEmail:true
      }
    },
    password: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:true
      }
    },
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