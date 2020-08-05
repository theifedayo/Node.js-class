const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient


const url = 'mongodb://localhost:27017/node-course-db'


MongoClient.connect(url, (err, db)=>{
	if (err) return process.exit(1)
	console.log('Connected successfully to server')
	db.close()
})