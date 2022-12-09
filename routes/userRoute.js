const express = require('express');
const router = express.Router();
const { StatusCodes } = require('http-status-codes');
const userServices = require('../services/userService');
const jwt = require('jsonwebtoken');
const MetaModel = require('../models/system/MetaModel');

require('dotenv').config();

// Register
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    let meta = new MetaModel();

    // Validate user input
    if (!(password && email)) {
        meta.setFailMessage(StatusCodes.LENGTH_REQUIRED, 'All input fields must be required.');
        return res.json({
            meta,
        });
    }

    // find user in database
    const checkEmailExist = await userServices.findUserByEmail(email);
    if (checkEmailExist) {
        meta.setFailMessage(StatusCodes.CONFLICT, 'User exists in database!');
        return res.json({
            meta,
        });
    }
    req.body.password = await bcrypt.hash(password, 10);
    const createdUser = await userServices.createUser(req.body);
    if (createdUser) {
        meta.setSuccessMessage(StatusCodes.CREATED, 'User created successfull!');
    } else
        createdUser
            ? meta.setSuccessMessage(StatusCodes.CREATED, 'User created successfull')
            : meta.setFailMessage(StatusCodes.BAD_REQUEST, 'Error in creating User');

    return createdUser ? res.json({ data: req.body.email, meta: meta }) : res.json({ meta: meta });
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    let meta = new MetaModel();
    if (!(password && email)) {
        meta.setFailMessage(StatusCodes.LENGTH_REQUIRED, 'All input fields must be required.');
        return res.json({
            meta,
        });
    }

    const user = await userServices.findUserByEmail(email);

    if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign({ user_id: user.id, email }, process.env.TOKEN_KEY, {
            expiresIn: '48h',
        });

        // save user token
        user.token = token;

        // user
        meta.setSuccessMessage(StatusCodes.OK);
        return res.json({ data: user, meta });
    }
    meta.setFailMessage(StatusCodes.BAD_REQUEST, 'Invalid Credentials');
    res.json({ meta });
});

module.exports = router;
