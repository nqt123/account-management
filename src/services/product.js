const Product = require('../models/product');

const getAllProduct = () => {
    return Product.find({}).populate('categories');
}

const createProduct = (productObj) => {
    const newProduct = Product.create(productObj);
    return newProduct;
}

module.exports = {
    getAllProduct,
    createProduct
}