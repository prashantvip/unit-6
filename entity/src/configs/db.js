const mongoose = require('mongoose');

const db = process.env.DataBase;

mongoose
  .connect(db)
  .then(() => console.log('database connected successfully'))
  .catch((err) => console.log('err.message' + err.message));