const express = require('express');

const app = express();
app.use(express.json())

const userRoute = require('./api/routes/userRoute');

app.use("/", userRoute);

module.exports = app;