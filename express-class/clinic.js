const express = require("express");
const app = express();

app.use(express.json())

var users = [{
  name:"John",
  kidneys:[{
    healthy: false
  }, {
    healthy: true
  }]
}]

app.get("/", function(req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  // console.log(johnKidneys)
  var healthyKidneys = johnKidneys.filter(function (el) {
    return el.healthy == true
  });
  // console.log(healthyKidneys)
  numOfHealthyKidneys = healthyKidneys.length;
  numOfUnhealthyKidneys = numberOfKidneys - numOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numOfHealthyKidneys,
    numOfUnhealthyKidneys
  })
})

app.post("/", function(req, res) {
  console.log(req.body)  
  const isHealthy = req.body.isHealthy
  users[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({
    msg:"Done!"
  })
})

app.put("/", function(req, res) {
})

app.delete("/", function(req, res) {
})

port = 3000
app.listen(port, function(){
  console.log("inside clinic")
})