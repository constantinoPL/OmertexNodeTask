const express = require('express');
require('dotenv').config();
const cors = require('cors');

const dbConnect = require('./config/dbConnect');
const userRoter = require('./src/routes/user');

dbConnect();
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', userRoter);

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
