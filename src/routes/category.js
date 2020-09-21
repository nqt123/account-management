const express = require('express');
const router = express.Router();
const categoryService = require('../services/category');
const Auth = require('../authentication/sessionAuth');
const RenderWithLayout = require('../helper/render');

router.get('/', async (req, res) => {
    try {
        const categories = await categoryService.getAllCategory();
        return RenderWithLayout(res, 'categories/list', { categories });
    } catch (error) {
        return res.send(error);
    }
})

router.get('/new', async (req, res) => {
    try {
        return RenderWithLayout(res, 'categories/new');
    } catch (error) {
        return res.send(error);
    }
})

router.post('/', async (req, res) => {
    try {
        const newCategory = await categoryService.createCategory(req.body);
        console.log(newCategory)
        return res.redirect('categories');
    } catch (error) {
        return res.send(error);
    }
})
module.exports = router;