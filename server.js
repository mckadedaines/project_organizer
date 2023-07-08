const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello Group 9')
});

app.listen(port, () => {
    console.log(`Connected to DB and listening on port ${port}`)
});