const express = require('express');
const { StatusCodes } = require('http-status-codes');
const router = express.Router();

const Datacol2Model = require('../models/database/Datacol2');
router.get('/datacol2', async (req, res) => {
    const data = await Datacol2Model.find();
    return res.json({
        meta: {
            code: StatusCodes.OK,
            message: 'success',
            status: true,
        },
        data: data,
    });
});
module.exports = router;
