const { application } = require('express');
const loginRouter = require('./login');
const registerRouter = require('./register');
const siteRouter = require('./site');
const productsRouter = require('./products');

function router(app) {
    app.use('/product', productsRouter);
    app.use('/register', registerRouter);
    app.use('/login', loginRouter);
    app.use('/', siteRouter);
}

module.exports = router;
