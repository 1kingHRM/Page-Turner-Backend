const express = require("express");
const GenreController = require("../controllers/genre.controller");
const controller = new GenreController();
const router = express.Router();


router.get("/", controller.getAll);
router.post("/add", controller.create);
router.delete("/delete/:id", controller.deleteById);


module.exports = router;
