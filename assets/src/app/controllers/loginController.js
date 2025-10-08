class loginController {
    login(req, res) {
        res.render('layouts/me/validation/login',
            { noFooter: true }
        );
    }
}
module.exports = new loginController();
