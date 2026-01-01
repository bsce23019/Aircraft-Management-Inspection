const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // change if different
  password: "",       // change if you set one
  database: "aircraft_db"
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
    return;
  }
  console.log("MySQL Connected");
});

module.exports = db;
