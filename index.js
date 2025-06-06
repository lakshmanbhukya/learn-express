const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;
const API_URL = "https://6803b4a679cb28fb3f597083.mockapi.io/api/users";
//my first express app
app.use(express.json());
app.get("/", (req, res) => {
  res.send("lakshman");
});
app.get("/user/add", (req, res) => {
  const name = req.query.name;
  const email = req.query.email;
  res.send(`user name is  ${name} and  mail ${email}`);
});
//my cusotm middle for authorization
function checkMiddleware(req, res, next) {
  const token = req.query.token;
  if (token == 9949) {
    next();
  } else {
    res.status(401).json({ error: "unauthorized" });
  }
}
app.get("/middleware", checkMiddleware, async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.status(200).send(response.data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching users" });
  }
});
//

//implementing crud operation on an MOCKAPI endpoint
app.get("/users", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.send(response.data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching users" });
  }
});

app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    const response = await axios.post(API_URL, { name, email });
    res.status(201).json(response.data);
  } catch (err) {
    res.status(400).json({ error: "Error creating user" });
  }
});
app.delete("/users/:id", async (req, res) => {
  try {
    const response = await axios.delete(`${API_URL}/${req.params.id}`);
    res.status(204).send(response.data);
  } catch (err) {
    res.status(400).json({ error: "Error deleting user" });
  }
});
app.get("/users/id", async (req, res) => {
  try {
    const id = req.query.id;
    const response = await axios.get(`${API_URL}/${id}`);
    res.send(response.data);
  } catch (err) {
    console.error("Error fetching user:", err.message);
    res.status(404).json({ error: "User not found" });
  }
});


//learning api calls in express
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} `);
});
