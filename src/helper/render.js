module.exports = function RenderWithLayout(res, body, params) {
    return res.render('layout/sidebar', { body, params });
}