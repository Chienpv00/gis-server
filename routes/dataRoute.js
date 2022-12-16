const express = require('express');
const router = express.Router();
require('dotenv').config();

const DataModel = require('../models/database/DataModel');

router.get('/getData', async (req, res) => {
    const data = await DataModel.find({});
    res.status(200).json(data);
});

router.post('/addData', async (req, res) => {
    const { name, data, size, color, meta } = req.body;
    const newData = new DataModel({ name, data, size, color, meta });
    const result = await newData.save();
    res.status(200).json(result);
});

module.exports = router;
