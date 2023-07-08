const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('CSE 341 - Collaborative Project Organizer')
});

app.listen(port, () => {
    console.log(`Connected to DB and listening on port ${port}`)
});