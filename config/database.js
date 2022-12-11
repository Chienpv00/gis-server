const mongoose = require('mongoose');

const connect = async () => {
    // environment
    const userName = 'chien';
    const password = encodeURI('chien1312');
    const dbName = 'gis';

    const uriConnect =
        'mongodb+srv://' +
        userName +
        ':' +
        password +
        '@cluster0.g4q7s.mongodb.net/' +
        dbName +
        '?retryWrites=true&w=majority';
    // optional params
    const params = {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    };

    try {
        const db = await mongoose.connect(uriConnect, params);
        console.log('🚀🚀 Connection successfully!!!');
        return db;
    } catch (error) {
        console.log('🚀 error occur with message: ', error);
    }
};

module.exports = { connect };
