const { Schema, model } = require('mongoose');

const DataSchema = new Schema({
});

module.exports = model('data', DataSchema);
