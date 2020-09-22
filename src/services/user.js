const User = require('../models/user');
const bcrypt = require('bcrypt');

const createUser = async ({ email, password }) => {
    const newUser = User.create({ email, password });
    return newUser;
}

const getUserByCredentials = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!bcrypt.compareSync(password, user.password)) {
        throw new Error("User not found");
    }
    return user;
}

const getAllUser = async () => {
    return User.find({});
}
module.exports = {
    createUser,
    getUserByCredentials,
    getAllUser
}