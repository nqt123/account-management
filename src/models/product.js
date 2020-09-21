const mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const productSchema = new mongoose.Schema({
    info: { type: String, required: true },
    password: String,
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    price: { type: Number }
}, { timestamps: true })

productSchema.plugin(aggregatePaginate);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;