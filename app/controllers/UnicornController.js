'use strict';
let Controller = require('./Controller')
const UNICORN = require('../models/unicorn')
const USER = require('../models/user')

class UnicornController extends Controller {

    constructor() {
        super(UNICORN)
    }

    find(req,res, next){
      this.model.find(req.params.id).populate({
        path: 'owner',
        populate:({path: 'user', populate:{ path: 'owner'}})
        }).exec((err, document)=>{
        if (err) next(err)
        else res.json(document)
      })
    }

}

module.exports = UnicornController
