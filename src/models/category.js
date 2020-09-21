const mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const categorySchema = new mongoose.Schema({
    name: { type: String, unique: true }
}, { timestamps: true })

categorySchema.plugin(aggregatePaginate);

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;