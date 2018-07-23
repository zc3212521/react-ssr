const express = require('express')
const app = express()
const template = require('./template')
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/api/data',function(req, res) {
    console.log('++++body+++', req.body)
    res.send('name' + req.body.name, 201)
})
app.get('/api/info', function (req, res) {
    res.send('lalala1111222')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

