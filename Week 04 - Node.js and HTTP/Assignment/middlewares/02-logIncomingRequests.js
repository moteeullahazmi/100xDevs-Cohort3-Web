//  Create a middleware that logs all incoming requests to the console.

const express = require('express');
const app = express();

function logRequests(req, res, next) {
    // write the logic for request log here
     const currentTime = new Date().toISOString(); // Get the current time in ISO format
     const logDetails = {
       time: currentTime, // Log the current time
       method: req.method, // HTTP method (GET, POST, etc.)
       url: req.originalUrl, // Full URL of the request
       headers: req.headers, // Request headers
     };
      console.log(logDetails); // Log the details to the console

      // Continue to the next middleware or route handler
      next();
}

app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

module.exports = app;
