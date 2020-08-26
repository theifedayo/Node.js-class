const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/EmployeeDB', { userNewParser: true},(err)=>{
	if (!err){console.log('MongoDB connections succeeded')}
	else {console.log('Erroe in DB connection : ' + err)}
})


require('./employee.model')