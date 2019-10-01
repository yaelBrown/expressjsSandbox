const express = require('express');
const path = require('path');

// Init express
const app = express();
const port = process.env.PORT || 5000;

// Endpoint and Route handlers
// app.get('/', (req, res) => res.send("Hello World!"));

// Static endpoint handler
app.use(express.static(path.join(__dirname, 'public')));

// Listen on a port
app.listen(port, () => console.log(`Listening on port: ${port}`));