const express = require('express');
const { RenderWithUserLayout, RenderWithLayout } = require('../helper/render');
const router = express.Router();
const userService = require('../services/user');

router.get('/register', (req, res) => {
    res.render('users/register');
})

router.get('/login', (req, res) => {
    res.render('users/login');
})

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.render('users/login');
})

router.get('/', async (req, res) => {
    try {
        RenderWithLayout(res, 'users/index');
    } catch (error) {
        res.send(error);
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await userService.getUserByCredentials(req.body);
        if (!user) {
            res.render('users/login');
        }
        req.session.user = user;
        return res.redirect('/products/owner');
    } catch (error) {
        res.send("Login Failed");
    }
})

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = await userService.createUser({ email, password });
        req.session.user = newUser;
        return RenderWithUserLayout(res, 'index');
    } catch (error) {
        return error;
    }
})

module.exports = router;