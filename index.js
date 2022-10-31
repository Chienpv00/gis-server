const express = require("express");
const db = require("./src/config/db");
const testRoute = require('./src/routes/test')

require("dotenv").config();

const app = express();

const port = process.env.PORT || 4000;

db.connect((err) => {
  err ? console("err: ", err) : console.log("Connected DB!");
});

db.query('select * from test', (err, result) => { err && (console.log('err')); console.log(result) })

app.use('/api/', testRoute)

// app.use((req, res) => {
//   res.send("Hello word!");
// });

app.listen(port, () => {
  console.log("Express are running on port: ", port);
});
