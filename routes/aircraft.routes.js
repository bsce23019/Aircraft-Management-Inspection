
const express = require("express");
const router = express.Router();
const controller = require("../controllers/aircraft.controller");

router.get("/", controller.getAllAircraft);
router.get("/create", (req, res) => res.render("aircraft/create"));
router.post("/create", controller.createAircraft);
router.get("/edit/:id", controller.getEditAircraft);
router.post("/edit/:id", controller.updateAircraft);
router.get("/delete/:id", controller.deleteAircraft);

module.exports = router;
