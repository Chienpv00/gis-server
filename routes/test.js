const express = require('express');
const router = express.Router();
const HttpStatus = require('http-status-codes');

const db = require('../config/database');

router.get('/test', async (req, res) => {
    try {
        const sql = `SELECT * FROM test`;
        db.query(sql, function (err, result) {
            if (err) {
                console.log('err', err);
                return;
            }
            res.json(result);
        });
    } catch (err) {
        console.log('err', err);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: err, message: err.message });
    }
});

module.exports = router;
