// index.js
// This is the main entry point of my application

// Express is a back end runtime library that extends node.js,
// Which can be used as the API-provider-sender-app that retrieves request data from the database
// and returns the data to the API consumer.

const express = require('express'); // require the express dependency
const app = express(); // create a new instance of an express object and store it in a variable called app
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello Madeira Traveller!!!');
});

app.listen(
  port,
  console.log(`🌎 Server is running at http://localhost:${port}!`)
);
