'use strict'
let mongoose = require('mongoose')

let unicornModel = mongoose.model('Unicorn', new mongoose.Schema({
    name: {
        type: String
    },
    sex: {
        type: String
    },
    birth: {
        type: String
    },
    description: {
        type: String
    },
    picture: {
        type: String
    },
    owner: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
}))

module.exports = unicornModel
