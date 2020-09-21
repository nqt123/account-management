const mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const staffSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    totalSale: { type: Number, default: 0 },
    totalIncome: { type: Number, default: 0 }
}, { timestamps: true })

staffSchema.plugin(aggregatePaginate);

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;