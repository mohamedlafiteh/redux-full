const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const getTasks = require("./getTasks/getTasks.js");
const createTasks = require("./createTasks/createTasks.js");
const deleteTasks = require("./deleteTasks/deleteTasks.js");
const updateTasks = require("./updateTasks/updateTasks.js");
const getTaskById = require("./getTaskById/getTaskById.js");
const updateTasksStatus = require("./updateTasksStatus/updateTasksStatus");

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

app.delete("/tasks/:taskId", (req, res) => {
  const id = req.params.taskId;
  return deleteTasks(id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(error => {
      res.status(400).json({
        message: "Error in deleting task",
        error: error
      });
    });
});

app.put("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  if (isNaN(id)) {
    res.status(404).send("Id is not number or no title");
  } else {
    return updateTasks(title, id).then(data => {
      res.status(200).json(data);
    });
  }
});

app.put("/taskStatus/:id", (req, res) => {
  const id = req.params.id;
  const status = req.body.completed;
  if (isNaN(id)) {
    res.status(404).send("Id is not number or no title");
  } else {
    return updateTasksStatus(status, id).then(data => {
      res.status(200).json(data);
    });
  }
});

app.get("/tasks/:id", (req, res) => {
  const id = req.params.id;

  if (isNaN(id)) {
    res.status(404).send("Id is not number");
  } else {
    return getTaskById(id).then(data => {
      res.status(200).json(data);
    });
  }
});

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
