const { Schema, model } = require('mongoose');

const TestSchema = new Schema({
    type: { type: String },
    generator: { type: String },
    copyright: { type: String },
    timestamp: { type: Date },
    features: Array,
});

module.exports = model('Test', TestSchema);
