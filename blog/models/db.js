const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/postdb', {useNewUrlParser: true})

const db = mongoose.connection;



require('./post')