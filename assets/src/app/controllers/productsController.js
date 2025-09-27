class productsController {
    showProducts(req, res) {
        res.render('layouts/products/product_page');
    }
}
module.exports = new productsController();
