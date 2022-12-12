const sequelize = require('../config/dbConfig');
const Sequelize = require('sequelize');

  var users = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
        type: Sequelize.STRING
    },
    occupation: {
        type: Sequelize.STRING
    },
    phone_number: {
        type: Sequelize.STRING
    }
  });


module.exports = users;