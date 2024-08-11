// server.js
const express = require('express');
const app = express();
const path = require('path');
const data = require('./data.json');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to render the JSON data
app.get('/', (req, res) => {
  res.render('index', { data });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
