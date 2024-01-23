const express = require("express");
const router = express.Router();


router.use("/books", require('./book.routes'));
router.use("/user", require('./user.routes'))
router.use("/genres", require('./genre.routes'));


module.exports = router;