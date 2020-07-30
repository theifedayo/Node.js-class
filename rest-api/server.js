const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')


let store = {}
store.accounts = []

let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler)

//GET METHOD


//POST METHOD


//PUT METHOD

//DELETE METHOD




app.listen(3000, ()=>{console.log("Listening on port 3000.....")})