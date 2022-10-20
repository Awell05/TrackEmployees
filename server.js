const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 6001;

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    },
    console.log(`connected to database`)
);

db.query(`SELECT * FROM role`, function (err, results) {
    console.log(results);
});

app.listen(PORT, ()=> {
    console.log(`server is running ${PORT}`);
});