const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const getTasks = () => {
  const sqlQuery = "SELECT * FROM tasks";
  return new Promise((resolve, reject) => {
    pool.query(sqlQuery, (error, result) => {
      if (error) {
        return reject(error);
      }
      resolve(result.rows);
    });
  });
};

module.exports = getTasks;
