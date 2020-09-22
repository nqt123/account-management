const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true, minlength: 3 },
    password: { type: String, required: true, minlength: 3 }
}, { timestamps: true })

userSchema.plugin(aggregatePaginate);

userSchema.pre('save', async function () {
    try {
        if (this.isModified('password')) {
            this.password = await bcrypt.hash(this.password, 8);
        }
    } catch (error) {
        console.log(error);
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;