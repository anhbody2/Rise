const Product = require('../models/products');
const { multipleMongooseToObject } = require('../../utils/mongoose');
class siteController {
    home(req, res) {
           Product.find({})
            .then(products =>{
                res.render('home',{
                    products: multipleMongooseToObject(products)
                })
            })
        }
}
module.exports = new siteController();
