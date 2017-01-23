'use strict';
let Controller = require('./Controller')
const USER = require('../models/user')

class UsersController extends Controller {

    constructor() {
        super(USER)
    }

}

module.exports = UsersController
