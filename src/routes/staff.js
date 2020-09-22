const express = require('express');
const router = express.Router();
const staffService = require('../services/staff');
const { RenderWithLayout } = require('../helper/render');

router.get('/register', (req, res) => {
    res.render('staffs/register');
})

router.get('/login', (req, res) => {
    if (!req.session.staff) {
        return res.render('staffs/login');
    }
    return res.redirect('/products');
})

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.render('staffs/login');
})

router.post('/login', async (req, res) => {
    try {
        const staff = await staffService.getStaffByCredentials(req.body);
        if (!staff) {
            res.render('staffs/login');
        }
        req.session.staff = staff;
        return RenderWithLayout(res, 'index');
    } catch (error) {
        return res.send(error);
    }
})

router.get('/get-session', (req, res) => {
    res.send({ res: req.session.staff })
})

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const newStaff = await staffService.createStaff({ email, password });
        req.session.staff = newStaff;
        return RenderWithLayout(res, 'index');
    } catch (error) {
        return res.send(error);
    }
})

module.exports = router;