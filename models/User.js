const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roll_number: { type: String, required: true },
    hostel: { type: String, required: true },
    room_number: { type: String, required: true },
    phone: { type: String, required: true },
    role: {
        type: String,
        enum: ['student', 'warden', 'admin'],
        required: true
    },
    timestamps: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;