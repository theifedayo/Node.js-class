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
app.get('/accounts', (req, res)=>{
	res.status(200).send(store.accounts)
})

//POST METHOD
app.post('/users',(res, req) => {
	let newAccount = req.bodyParser
	let id = store.accounts.length
	store.accounts.push(newAccount)
	res.status(201).send({id:id})
})

//PUT METHOD
app.put('/accounts/:id', (req, res) => {
  store.accounts[req.params.id] = req.body
  res.status(200).send(store.accounts[req.params.id])
})

//DELETE METHOD
app.delete('/accounts/:id', (req, res) => {
  store.accounts.splice(req.params.id, 1)
  res.status(204).send()
})



app.listen(3000)