const Staff = require('../models/staff');

const createStaff = ({ email, password }) => {
    const newStaff = Staff.create({
        email,
        password
    });
    return newStaff;
}

const getStaffByCredentials = async ({ email, password }) => {
    const staff = await Staff.findOne({ email });
    if (password !== staff.password) {
        throw new Error("Staff not found");
    }
    return staff;
}

const getAllStaff = async () => {
    return Staff.find({});
}
module.exports = {
    createStaff,
    getStaffByCredentials,
    getAllStaff
}