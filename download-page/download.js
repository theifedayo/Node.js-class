const http = require('http')
const http = require('http')
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')





downloadPage(process.argv[2])
const downloadPage = (url='http://nodeprogram.com') => {
  const fetchPage = (urlF, callback) => {
    
  }
  const folderName = uuidv1()

  fs.mkdirSync(folderName)
  fetchPage(url, (error, data)=>{
    
    fs.writeFileSync(path.join(__dirname, folderName, 'file.html'), data)
    console.log('downloading is done in folder ', folderName)
  })  
}