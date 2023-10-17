const path = require('path');

require("dotenv").config();
const port = process.env.PORT || 8080;

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// delay all requests by 1 second
app.use(function (req, res, next) { setTimeout(next, 1000) });

app.get('/hello', (req, res) => {
  res.send('Hello INFO 2310!');
});

// listen for requests
app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}/`);
});
