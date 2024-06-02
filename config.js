const mysql = require("mysql2");

const config = {
  host: "34.123.182.100",
  user: "root",
  password: ".gXf/OV6CAQG/oQ:",
  database: "perpus",
};

const connect = mysql.createConnection(config);

// Koneksi DB
connect.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected");
});

module.exports = connect;