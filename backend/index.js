require('dotenv').config()
const express = require("express");
const PORT = 3000;
const cors = require('cors')

router = require('./src/routes')

const app = express();

app.use(cors())

app.use(express.urlencoded({ extended: true }));

app.use(router)

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});
