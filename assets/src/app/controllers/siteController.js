class siteController {
    home(req, res) {
        res.render('home');
    }
}
module.exports = new siteController();
