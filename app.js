require('dotenv').config();
require('./config/database').connect();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Logic goes here

module.exports = app;
