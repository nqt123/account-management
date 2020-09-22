const express = require('express');
const router = express.Router();
const productService = require('../services/product');
const userService = require('../services/user');
const categoryService = require('../services/category');
const staffService = require('../services/staff');
const Auth = require('../authentication/sessionAuth');
const { RenderWithLayout, RenderWithUserLayout } = require('../helper/render');

router.get('/', async (req, res) => {
    try {
        const products = await productService.getAllProduct();
        return RenderWithLayout(res, 'products/list', { products });
    } catch (error) {
        return res.send(error);
    }
})

router.get('/owner', async (req, res) => {
    try {
        const user = req.session.user;
        const products = await productService.getUserProduct(user);
        return RenderWithUserLayout(res, 'products/list', { products });
    } catch (error) {
        return res.send(error);
    }
})


router.get('/new', async (req, res) => {
    try {
        const [users, categories, staffs] = await Promise.all([
            userService.getAllUser(),
            categoryService.getAllCategory(),
            staffService.getAllStaff()
        ])
        return RenderWithLayout(res, 'products/new', { users, categories, staffs });
    } catch (error) {
        return res.send(error);
    }
})

router.post('/', async (req, res) => {
    try {
        await productService.createProduct(req.body);
        return res.redirect('products');
    } catch (error) {
        return error;
    }
})


router.get('/:id', async (req, res) => {
    try {
        const product = await productService.getProduct(req.params.id);
        return RenderWithLayout(res, 'products/detail', { product });
    } catch (error) {
        return res.send(error);
    }
})
module.exports = router;