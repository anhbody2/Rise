const Product = require('../models/products');

const {multipleMongooseToObject} = require('../../utils/mongoose');


class cartController {
    // GET /cart
     showCart(req, res) {
       Product.find({added: true})
        .then(products =>{
            res.render('layouts/me/cart',{
                products: multipleMongooseToObject(products),
                noFooter: true,
                noNavbar: true
            })
        })
    }
}
module.exports = new cartController();
