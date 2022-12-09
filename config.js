require('dotenv').config();

const p = process.env;

const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: p.HOST || 'localhost',
        user: p.USER,
        password: p.PASSWORD,
        database: p.DATABASE,
        dateStrings: 'date',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    },
    listPerPage: 10,
};
module.exports = config;
