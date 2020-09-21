const Category = require('../models/category');

const getAllCategory = () => {
    return Category.find({});
}

const createCategory = ({ email, password }) => {
    const newStaff = Staff.create({
        email,
        password
    });
    return newStaff;
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