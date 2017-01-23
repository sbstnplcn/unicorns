'use strict'
const http = require('http')
const express = require('express')
const app = exports.app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const morgan = require('morgan')
const routes = require('./app/routes')
const port = process.env.PORT || 9000
const cors = require('cors')

app.use(express.static(__dirname + '/public'))

app.use(morgan('combined'))

app.use(bodyParser.urlencoded({
    'extended': 'true'
}))
app.use(bodyParser.json())
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}))

app.use(methodOverride('X-HTTP-Method-Override'))

app.use(cors())

app.use('/api', routes())

let server = http.Server(app)

server.listen(port)
console.log(`server listening on port ${port}`)

process.on('SIGINT', function() {
    console.log("\nStopping...")
    process.exit()
});

let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/unicorn')

app.use((error, request, response, next) => {

    console.error(error.stack)
    response.status(500).send(error.message)
})
