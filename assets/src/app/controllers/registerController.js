class registerController {
    reg(req, res) {
        res.render('layouts/me/validation/register',
            {noFooter: true}
        );
    }
}
module.exports = new registerController();
