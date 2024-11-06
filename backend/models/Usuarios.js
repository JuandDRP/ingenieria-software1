// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
}); 


module.exports = mongoose.model('Usuario', userSchema, 'usuarios');
