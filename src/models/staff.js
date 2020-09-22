const mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');
const bcrypt = require('bcrypt');

const staffSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true, minlength: 3 },
    password: { type: String, required: true, minlength: 3 },
    totalSale: { type: Number, default: 0 },
    totalIncome: { type: Number, default: 0 }
}, { timestamps: true })

staffSchema.plugin(aggregatePaginate);

staffSchema.pre('save', async function () {
    try {
        if (this.isModified('password')) {
            this.password = await bcrypt.hash(this.password, 8);
        }
    } catch (error) {
        console.log(error);
    }
})

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;