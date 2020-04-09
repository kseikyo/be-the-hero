require('dotenv/config');

const express = require('express');
const routes  = require('./routes');
const cors    = require('cors');
const { errors } = require('celebrate');

const app = express();

const corsOptions = {
  origin: process.env.REACT_APP_URL,
  credentials: true
}
app.options('*', cors(corsOptions));

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

module.exports = app;

