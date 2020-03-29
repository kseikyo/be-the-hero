require('dotenv/config');

const express = require('express');
const routes  = require('./routes');
const cors    = require('cors');
const { errors } = require('celebrate');

const app = express();

app.use(cors({
  origin: process.env.REACT_APP_URL
}));
app.use(express.json());
app.use(routes);

app.use(errors());

module.exports = app;

