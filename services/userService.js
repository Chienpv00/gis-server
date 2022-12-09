const db = require('./db');
const helper = require('../helper');
const { StatusCodes, getReasonPhrase } = require('http-status-codes');

async function getAllUser() {
    const data = await db.query(`SELECT id, email FROM user`);
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
    let t = await db.query(`SELECT id, email, password from user where email = '${email}'`);
    return t[0];
}

async function createUser(user) {
    const result = await db.query(`INSERT INTO user(email, password) VALUES('${user.email}', '${user.password}')`);
    if (result.affectedRows) {
        return true;
    } else {
        return false;
    }
}

module.exports = { getAllUser, findUserByEmail, createUser };
