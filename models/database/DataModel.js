const { Schema, model } = require('mongoose');

const DataSchema = new Schema({
    data: Array,
});

module.exports = model('data', DataSchema);
