const express = require("express");
const router = express.Router();
const HttpStatus = require("http-status-codes");

const db = require("../config/db");

router.get("/test", async (req, res) => {
  try {
    const sql = `SELECT * FROM test`;
    const data = await db.query(sql);
    res.json(data);
  } catch (err) {
    console.log("err", err);
    res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .send({ error: err, message: err.message });
  }
});

module.exports = router;
