const { Schema, model } = require('mongoose');

const Datacol2Schema = new Schema({
    type: { type: String },
    generator: { type: String },
    copyright: { type: String },
    timestamp: { type: Date },
    features: Array,
});

module.exports = model('Datacol2', Datacol2Schema);
