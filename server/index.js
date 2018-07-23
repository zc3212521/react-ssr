const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')

const app = express()
const template = require('./template')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cookieParser())

app.post('/api/data',function(req, res) {
    console.log('++++body+++', req.body)
    console.log('cookie', req.cookies)
    res.send('name' + req.body.name, 201)
})
app.get('/api/info', function (req, res) {
    res.send('lalala222')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

