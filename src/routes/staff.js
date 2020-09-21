const express = require('express');
const router = express.Router();
const staffService = require('../services/staff');
const RenderWithLayout = require('../helper/render');

router.get('/register', (req, res) => {
    res.render('staffs/register');
})

router.get('/login', (req, res) => {
    res.render('staffs/login');
})

router.post('/login', async (req, res) => {
    try {
        const staff = await staffService.getStaffByCredentials(req.body);
        if (!staff) {
            res.render('staffs/login');
        }
        return RenderWithLayout(res, 'index', { greeting: "Hello" });
    } catch (error) {
        return res.send("Login Failed");
    }
})

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        await staffService.createStaff({ email, password });
        return res.render('login');
    } catch (error) {
        return error;
    }
})

module.exports = router;