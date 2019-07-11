const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "10.7.101.244",
    user: "forNode",
    database: "forNode",
    password: "forNode"
});
module.exports = pool.promise();