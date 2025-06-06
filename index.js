const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("lakshman");
});
app.get("/user",(req,res)=> {
  res.send("lakshman naik");
});
app.get("/user/add",(req,res)=> {
  const name=req.query.name;
  const email=req.query.email;
  res.send(`user name is  ${name} and  mail ${email}`);
  
});
app.get("/users",(req,res)=>{
  res.send('<h1>users list</h1>');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} `);
});
