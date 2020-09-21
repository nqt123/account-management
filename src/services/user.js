const User = require('../models/user');

const createUser = ({ email, password }) => {
    const newUser = User.create({
        email,
        password
    });
    return newUser;
}

const getUserByCredentials = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (password !== user.password) {
        throw new Error("Staff not found");
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