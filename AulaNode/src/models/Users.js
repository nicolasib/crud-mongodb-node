const mongoose = require('../database/index');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const User = mongoose.model('Users', UserSchema);

module.exports = User;