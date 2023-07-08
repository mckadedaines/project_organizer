const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const tasksRoutes = require('./routes/tasks');

app.use(bodyParser.json());

app.use('/users/:userId/tasks', tasksRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
