class registerController {
    reg(req, res) {
        res.render('layouts/me/validation/register');
    }
}
module.exports = new registerController();
