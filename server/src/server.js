const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const getTasks = require("./getTasks/getTasks.js");
const createTasks = require("./createTasks/createTasks.js");

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

app.post("/tasks", (req, res) => {
  const title = req.body.title;
  const completed = req.body.completed;
  // console.log(`this is title ${title} this is completed ${completed}`);
  if (title.length > 0 && title.length < 150) {
    createTasks(title, completed).then(data => {
      res.status(200).json("Added successfully");
    });
  } else {
    res.status(400).json({
      error: error,
      message: "Error in adding task"
    });
  }
});
