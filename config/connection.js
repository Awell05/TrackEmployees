const Sequelize = require('sequelize');
require('dontenv').config();

const sequelize = new Sequelize(
    process.env.DBB,
    process.env.USERNAME,
    process.env.PASS,
    {
        host:'localhost',
        dialect: 'mysql',
        port: 3301
    }
);

module.exports = sequelize;
