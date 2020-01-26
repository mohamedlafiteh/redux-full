const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const PORT = 3010;

app.listen(PORT, () => {
  console.log(`THis app is listening to post ${PORT}`);
});
