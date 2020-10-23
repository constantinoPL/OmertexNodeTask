const express = require('express');
require('dotenv').config();
const cors = require('cors');

const dbConnect = require('./config/dbConnect');

dbConnect();
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
