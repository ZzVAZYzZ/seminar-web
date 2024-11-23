const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('../routes/diemdanhRoute');
const { mongodbConnect } = require('../databases/mongodb/mongodbConnect');
// test


//config
require("dotenv").config();

// init middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//init databases
mongodbConnect();

//init routers
app.use('/',router);

//init error handler






module.exports = app;