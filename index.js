const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("lakshman");
});
app.get("/user", (req, res) => {
  res.send("lakshman naik");
});
app.get("/user/add", (req, res) => {
  const name = req.query.name;
  const email = req.query.email;
  res.send(`user name is  ${name} and  mail ${email}`);
});
//my cusotm middle for authorization
function checkMiddleware(req, res, next) {
  if (req.query.token == "9949") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}
app.get("/users",checkMiddleware, (req, res) => {
  res.send("Authorized by Middleware");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} `);
});
