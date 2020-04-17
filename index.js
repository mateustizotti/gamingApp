const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const server = app.listen(port, () => console.log(`Starting server at ${port}`));
app.use(express.static('public'));