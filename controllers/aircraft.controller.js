const db = require("../config/db");

// READ ALL
exports.getAllAircraft = (req, res) => {
  db.query("SELECT * FROM aircraft", (err, results) => {
    if (err) throw err;
    res.render("aircraft/list", { aircrafts: results });
  });
};

// CREATE
exports.createAircraft = (req, res) => {
  const data = req.body;
  db.query("INSERT INTO aircraft SET ?", data, (err) => {
    if (err) throw err;
    res.redirect("/aircraft");
  });
};

// EDIT PAGE
exports.getEditAircraft = (req, res) => {
  db.query(
    "SELECT * FROM aircraft WHERE id = ?",
    [req.params.id],
    (err, results) => {
      res.render("aircraft/edit", { aircraft: results[0] });
    }
  );
};

// UPDATE
exports.updateAircraft = (req, res) => {
  db.query(
    "UPDATE aircraft SET ? WHERE id = ?",
    [req.body, req.params.id],
    () => res.redirect("/aircraft")
  );
};

// DELETE
exports.deleteAircraft = (req, res) => {
  db.query(
    "DELETE FROM aircraft WHERE id = ?",
    [req.params.id],
    () => res.redirect("/aircraft")
  );
};
