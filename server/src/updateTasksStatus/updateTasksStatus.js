const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const updateTasksStatus = (status, id) => {
  const sqlQuery = "UPDATE tasks SET completed=$1 WHERE id=$2;";
  return new Promise((resolve, reject) => {
    pool.query(sqlQuery, [status, id], (error, result) => {
      if (error) {
        return reject(error);
      }
      resolve(result.rows);
    });
  });
};

module.exports = updateTasksStatus;
