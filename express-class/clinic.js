const express = require("express");
const z = require("zod");

const app = express();

app.use(express.json())

var users = [{
  name:"John",
  kidneys:[{
    healthy: true
  }, {
    healthy: true
  }]
}]

// Zod schema for request headers
const headerSchema = z.object({
  email: z.string().email().min(2, 'Username is required'),
  password: z.string().min(8, 'Password is required'),
});

// Middleware to check username and password
const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  response = headerSchema.safeParse(req.headers)
  // console.log(response)
  if (!response.success){
    res.status(401).json({
      "msg":"Your inputs are invalid"
    })
  }

  // Replace with your authentication logic
  if (username === 'admin' && password === 'password') {
    next(); // Proceed to the next middleware or route handler
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
};

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

app.post("/", authMiddleware, function(req, res) {
  console.log(req.body)  
  const isHealthy = req.body.isHealthy
  users[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({
    msg:"Done!"
  })
})

app.put("/", authMiddleware, function(req, res) {
  try {

    const hasUnhealthyKidneys = users.some(user => user.kidneys.some(kidney => !kidney.healthy));

    if (!hasUnhealthyKidneys) {
      return res.status(411).json({ error: 'No unhealthy kidneys found' });
    }

    users = users.map(user => {
      user.kidneys = user.kidneys.map(kidney => {
        return { healthy: true };
      });
      return user;
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update kidney health' });
  }
})

// DELETE endpoint to remove unhealthy kidneys
app.delete('/', authMiddleware, (req, res) => {
  try {

    const hasUnhealthyKidneys = users.some(user => user.kidneys.some(kidney => !kidney.healthy));

    if (!hasUnhealthyKidneys) {
      return res.status(411).json({ error: 'No unhealthy kidneys found' });
    }

    users = users.map(user => {
      user.kidneys = user.kidneys.filter(kidney => kidney.healthy);
      return user;
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove unhealthy kidneys' });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

port = 3000
app.listen(port, function(){
  console.log("inside clinic")
})