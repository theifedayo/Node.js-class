const express = require('express')
// const logger = require('morgan')
// const errorhandler = require('errorhandler')
// const bodyParser = require('body-parser')

const restaurants = [
	{id: 1, name:"honeygrill"},
	{id: 2, name:"chicken republic"},
	{id: 3, name:"mr biggs"},
];

const app = express()
app.use(express.json())


//GET METHOD
app.get('/api/restaurants',(req, res)=>{
	res.send(restaurants)
})

app.get('/api/restaurants/:id', (req, res)=>{
	const restaurant = restaurants.find(r => r.id === parseInt(req.params.id))
	if (!restaurant) res.status(404).send('The restaurant was not found')
		res.send(restaurant)
})



//POST METHOD
app.post('/api/restaurants', (req, res)=>{
	const restaurant = {
		id: restaurants.length + 1,
		name: req.body.name
	}
	restaurants.push(restaurant)
	res.send(restaurant)
})

//PUT METHOD

//DELETE METHOD


//PORT
const port = process.env.PORT || 3000;

app.listen(port, ()=>{console.log('Listening on port ',port,'.....')})