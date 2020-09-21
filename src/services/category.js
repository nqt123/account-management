const Category = require('../models/category');

const getAllCategory = () => {
    return Category.find({});
}

const createCategory = ({ name }) => {
    const newCategory = Category.create({
        name
    });
    return newCategory;
}

const getCategoryByName = async ({ name }) => {
    const category = await Category.findOne({ name });
    if (!category) {
        throw new Error("Category not found");
    }
    return category;
}

module.exports = {
    createCategory,
    getCategoryByName,
    getAllCategory
}