const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const getTaskById = id => {
  const sqlQuery = "SELECT * FROM tasks WHERE id=$1";
  return new Promise((resolve, reject) => {
    pool.query(sqlQuery, [id], (error, result) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(result.rows);
      }
    });
  });
};

module.exports = getTaskById;
