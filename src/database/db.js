const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/account-managerment', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected To Database');
});