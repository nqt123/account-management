const mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
}, { timestamps: true })

userSchema.plugin(aggregatePaginate);

const User = mongoose.model('User', userSchema);

module.exports = User;