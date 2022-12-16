const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    token: { type: String },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    modifiedDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('User', UserSchema);
