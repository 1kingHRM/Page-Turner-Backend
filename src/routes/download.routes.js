const express = require("express");
const DownloadController = require("../controllers/download.controller");
const controller = new DownloadController();
const router = express.Router();

const requireLogin = require("../middlewares/requireLogin");

router.get("/", requireLogin, controller.getAll);
router.post("/", requireLogin, controller.create);
router.delete("/", requireLogin, controller.deleteAll);

module.exports = router;
