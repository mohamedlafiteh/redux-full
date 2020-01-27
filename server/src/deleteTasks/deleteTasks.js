const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

deleteTasks = id => {
  const sqlQuery = "DELETE FROM tasks WHERE id= $1";
  return new Promise((resolve, reject) => {
    pool.query(sqlQuery, [id], (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result.rows);
    });
  });
};

module.exports = deleteTasks;
