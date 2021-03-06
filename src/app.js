// Modules
const express = require('express');
const app = express();

const db = require('./db')

const PORT = process.env.PORT || 5000;

// Router
const routes = require('./routes/router');

// Middleware to parse body
app.use(express.json());

// Define routes
app.use(routes);
app.use((req, res) => {
  res.status(404).json({
    message: 'Welcome to my API try again',
  });
});

var http = require("http");
setInterval(function() {
    http.get("https://mauricio-rosas-api.herokuapp.com");
}, 300000); 

// Start server
app.listen(PORT, () => {
  console.log(`API listening at http://localhost:${PORT}`)
});

