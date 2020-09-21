const express = require('express');
const RenderWithLayout = require('../helper/render');
const router = express.Router();
const userService = require('../services/user');

router.get('/register', (req, res) => {
    res.render('users/register');
})

router.get('/login', (req, res) => {
    res.render('users/login');
})

router.post('/login', async (req, res) => {
    try {
        const user = await userService.getUserByCredentials(req.body);
        if (!user) {
            res.render('users/login');
        }
        return RenderWithLayout(res, 'index', { greeting: "Hello" });
    } catch (error) {
        res.send("Login Failed");
    }
})

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        await userService.createUser({ email, password });
        return res.render('login');
    } catch (error) {
        return error;
    }
})

module.exports = router;