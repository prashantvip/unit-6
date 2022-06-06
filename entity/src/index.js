require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./Routes/routes');

const Db = require('./configs/db');

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

const port = process.env.PORT || 8989;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});