var mysql = require("mysql");
require("dotenv").config();

const p = process.env;

var db = mysql.createConnection({
    host: p.HOST || "localhost",
    user: p.USER,
    password: p.PASSWORD,
    database: p.DATABASE,
    dateStrings: 'date'
});

module.exports = db;