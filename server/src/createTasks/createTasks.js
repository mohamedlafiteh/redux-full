const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

createTasks = (title, completed) => {
  //console.log(`this is title ${title} this is completed ${completed}`);
  const sqlQuery = "INSERT INTO tasks (title,completed) VALUES ($1,$2)";

  return new Promise((resolve, reject) => {
    pool.query(sqlQuery, [title, completed], (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result.rows);
    });
  });
};

module.exports = createTasks;
