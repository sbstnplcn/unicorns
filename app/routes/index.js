'use strict'
let fs = require('fs')
let express = require('express')

module.exports = () => {
    const ROUTER = express.Router()

    fs.readdir('./app/routes', (error, files) => {

        if (error)
            throw error
        else
            files.forEach((file) => {
                let route = file.substr(0, file.lastIndexOf('.'))
                if (route !== 'index') {
                    require('./' + route)(ROUTER)
                }
            })

    })

    return ROUTER

}
