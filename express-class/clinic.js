const express = require("express");
const app = express();

var users = [{
  name:"John",
  kidneys:[{
    healthy: false
  }, {
    healthy: true
  }]
}]

app.get("/", function(req, res) {
})

app.post("/", function(req, res) {
})

app.put("/", function(req, res) {
})

app.delete("/", function(req, res) {
})

port = 3001
app.listen(port, function(){
})