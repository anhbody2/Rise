const Product = require('../models/products');
const { mongooseToObject } = require('../../utils/mongoose');
class productsController {
    showProducts(req, res) {
        Product.findOne({ category: req.params.category, slug: req.params.slug })
            .then(product => {
                res.render('layouts/products/product_page',
                    { product: mongooseToObject(product),
                    }
                
                )
        
            })
    }
    test(req, res) {
        res.render('test')
    }
}
module.exports = new productsController();
