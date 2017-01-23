'use strict'
let jwt = require('jsonwebtoken')
const USER = require('../models/user')

module.exports = {

    local(req, res, next) {
        if (!req.body.email || !req.body.password) {
            res.status(400).send("Please enter your email and password")
        } else {
            USER.findOne(req.body, {
                password: 0
            }, (err, user) => {
                if (err)
                    next(err)
                else if (!user)
                    res.sendStatus(403)
                else {
                    let token = jwt.sign(user, 'unicornToken', {
                        expiresIn: "24h"
                    })
                    res.json({
                        success: true,
                        user: user,
                        token: token
                    })
                }
            })
        }
    }

}
