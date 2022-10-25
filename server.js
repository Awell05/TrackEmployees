const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 6001;
const sequelize = require('./config/connection');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
    app.listen(PORT, ()=> {
    console.log(`server is running ${PORT}`);
});
});