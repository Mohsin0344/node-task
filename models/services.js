const sequelize = require('../config/dbConfig');
const Sequelize = require('sequelize');

var services = sequelize.define("services", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    service_name: {
      type: Sequelize.STRING,
    },
    fk_user_id: {
        type: Sequelize.INTEGER
    }
  });

  module.exports = services;
