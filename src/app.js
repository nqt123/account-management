const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');

require('dotenv').config();
require('./database/db');

const port = process.env.PORT || 3030;
const userRouter = require('./routes/user');
const staffRouter = require('./routes/staff');
const categoryRouter = require('./routes/category');
const productRouter = require('./routes/product');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('trust proxy', 1)

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 60000 }
}));

app.use('/users', userRouter);
app.use('/staffs', staffRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);

app.get('/', (req, res) => {
    res.render("users/login");
})

app.get('/create-accounts', (req, res) => {
    res.render("createAccount");
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})