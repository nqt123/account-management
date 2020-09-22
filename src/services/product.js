const Product = require('../models/product');

const getAllProduct = () => {
    return Product.find({}).populate('categories').populate('ownerId');
}

const getProduct = (id) => {
    return Product.findOne({ _id: id }).populate('categories').populate('ownerId');
}

const getUserProduct = async (user) => {
    return Product.find({ ownerId: user._id }).populate('ownerId');
}

const createProduct = (productObj) => {
    const newProduct = Product.create(productObj);
    return newProduct;
}

module.exports = {
    getAllProduct,
    createProduct,
    getUserProduct,
    getProduct
}