function RenderWithLayout(res, body, params) {
    return res.render('layout/sidebar', { body, params });
}

function RenderWithUserLayout(res, body, params) {
    return res.render('layout/userSidebar', { body, params });
}

module.exports = { RenderWithLayout, RenderWithUserLayout }