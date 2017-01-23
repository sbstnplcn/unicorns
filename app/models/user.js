'use strict'
let mongoose = require('mongoose')

let userModel = mongoose.model('User', new mongoose.Schema({
    firstname: {
        type: String
    },
    surname: {
        type: String,
        unique: true
    },
    email: {
        type: String
    },
    avatar: {
        type: String
    }
}, {
    timestamps: true
}))

module.exports = userModel
