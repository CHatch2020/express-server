console.log('My first server 😄');

// load express library from modules/express:
const express = require('express');

// create "app", or server:
const app = express();

// tell express where to find our "public" files:
app.use(express.static('./server/public'));

// starts server, listens for requests:
app.listen(5000, function() {
    console.log('express server is running');
    
});