const express = require('express');

// Init express
const app = express();
const port = 5000;

// Endpoint and Route handlers
app.get('/', (req, res) => res.send("Hello World!"));

// Listen on a port
app.listen(port);
console.log(`Listening on port: ${port}`);