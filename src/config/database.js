
const { Sequelize } = require('sequelize');
const dbConfig = require("./config")

const sequelize = new Sequelize(dbConfig.development)