const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const getTasks = require("./getTasks/getTasks.js");

app.use(cors());
app.use(bodyParser.json());

const PORT = 3010;

app.listen(PORT, () => {
  console.log(`THis app is listening to post ${PORT}`);
});

app.get("/", (req, res) => {
  getTasks()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(400).send(error);
    });
});
