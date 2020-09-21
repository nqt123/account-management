const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    info: {
        type: String,
        required: true
    },
    password: String,
    categories: String,
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff'
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    price: { type: Number }
})
const Product = mongoose.model('Product', productSchema);

module.exports = Product;