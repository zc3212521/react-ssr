const express = require('express')
const app = express()
const template = require('./template')

app.get('/', function(req, res) {
    res.send(template({env: process.env.NODE_ENV}))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

