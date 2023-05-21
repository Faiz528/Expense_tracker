const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('expense', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  Expenses: {type:Sequelize.INTEGER,
       allowNull : false
  },
  Purpose: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Category: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;
