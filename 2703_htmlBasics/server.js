// express server to load static pages with hotreload.
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve all static files (HTML, CSS, JS) from the current directory
app.use(express.static(__dirname));

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
