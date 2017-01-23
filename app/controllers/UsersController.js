'use strict';
let Controller = require('./Controller')
const USER = require('../models/user')

class UsersController extends Controller {

    constructor() {
        super(USER)
    }

    authenticate(req, res, next) {
        if (req.user) {
            let token = jwt.sign(req.user, ENV.token, {
                expiresIn: "24h"
            })
            res.redirect("/auth/callback/" + token);
        } else {
            res.send(401);
        }
    }
}

module.exports = UsersController
