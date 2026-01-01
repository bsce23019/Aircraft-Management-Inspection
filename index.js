const express = require("express");
require("./config/db");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/aircraft", require("./routes/aircraft.routes"));

app.get("/", (req, res) => res.redirect("/aircraft"));

app.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);



