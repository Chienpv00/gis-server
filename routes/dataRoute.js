const express = require('express');
const router = express.Router();
require('dotenv').config();

const DataModel = require('../models/database/DataModel');

router.get('/getData', async (req, res) => {
    const data = await DataModel.find({});
    res.status(200).json(data);
});

module.exports = router;
