const { application } = require('express');
const loginRouter = require('./login');
const registerRouter = require('./register');
const siteRouter = require('./site');
const productsRouter = require('./products');
const cartRouter = require('./cart');

function router(app) {
    app.use('/product', productsRouter);
    app.use('/register', registerRouter);
    app.use('/cart', cartRouter);
    app.use('/test', productsRouter);
    app.use('/login', loginRouter);
    app.use('/', siteRouter);
}

module.exports = router;
