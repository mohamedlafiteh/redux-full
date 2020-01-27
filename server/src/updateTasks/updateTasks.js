const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const updateTasks = (title, id) => {
  const sqlQuery = "UPDATE tasks SET title=$1 WHERE id =$2 RETURNING *";
  return new Promise((resolve, reject) => {
    pool.query(sqlQuery, [title, id], (error, result) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(result.rows);
      }
    });
  });
};

module.exports = updateTasks;
