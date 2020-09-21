const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config();
require('./database/db');

const port = process.env.PORT || 3030;
const userRouter = require('./routes/user');
const staffRouter = require('./routes/staff');
const categoryRouter = require('./routes/category');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/users', userRouter);
app.use('/staffs', staffRouter);
app.use('/categories', categoryRouter);

app.get('/', (req, res) => {
    res.render("users/login");
})

app.get('/create-accounts', (req, res) => {
    res.render("createAccount");
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})