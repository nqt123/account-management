const express = require('express');
const router = express.Router();
const categoryService = require('../services/category');
const RenderWithLayout = require('../helper/render');

router.get('/', async (req, res) => {
    const categories = await categoryService.getAllCategory();
    return RenderWithLayout(res, 'categories/list', { categories });
})

module.exports = router;