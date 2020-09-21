const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    totalSale: { type: Number, default: 0 },
    totalIncome: { type: Number, default: 0 }
})

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;