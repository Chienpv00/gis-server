const express = require('express');
const app = require('./app');
const testRoute = require('./routes/test');
const dataRoute = require('./routes/dataRoute');
const userRoute = require('./routes/userRoute');

require('dotenv').config();

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

app.use(express.json());

app.use('/api/', dataRoute);
app.use('/api/user', userRoute);

app.listen(port, () => {
    console.log('Express are running on port: ', port);
});
