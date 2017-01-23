'use strict'

let UnicornController = require('../controllers/UnicornController')

module.exports = (app) => {

    let ctrl = new UnicornController()

    app.get('/unicorn', (req, res, next) => {
        return ctrl.find(req, res, next)
    })

    app.get('/unicorn/:id', (req, res, next) => {
        return ctrl.findById(req, res, next)
    })

    app.post('/unicorn', (req, res, next) => {
        return ctrl.create(req, res, next)
    })

    app.put('/unicorn/:id', (req, res, next) => {
        return ctrl.update(req, res, next)
    })

    app.delete('/unicorn/:id', (req, res, next) => {
        return ctrl.delete(req, res, next)
    })
}
