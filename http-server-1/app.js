const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

// middleware
app.use(bodyParser.json())

app.get('/', function(req, res){
  res.send('Hello World!')
})

app.post('/', function(req, res){
  console.log(req.body)
})

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})