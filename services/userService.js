const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const { StatusCodes, getReasonPhrase } = require('http-status-codes');

async function getAllUser() {
    const data = await db.query(`SELECT * FROM test`);
    const meta = {
        code: StatusCodes.OK,
        message: getReasonPhrase(StatusCodes.OK),
    };
    return {
        meta,
        data,
    };
}
async function findUserByEmail(email) {
    return { email: '', password: '' };
    return await db.query(`SELECT 1 from test where email = '${email}'`);
}

async function createUser(user) {
    const result = await db.query(``);
    if (result.affectedRows) {
        return true;
    } else {
        return false;
    }
}

async function register() {}

module.exports = { getAllUser, findUserByEmail, createUser };
