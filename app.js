const express = require('express');
const app = express();
const port = 80;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const pets = require('./routes/pets');
const users = require('./routes/users');

app.use('/pets', pets);
app.use('/users', users);

app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});