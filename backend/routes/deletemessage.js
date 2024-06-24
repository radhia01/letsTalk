const controller = require("../controllers/controller");
const express = require("express");
const router = express.Router();
const {verifyToken} = require("../utils/verifyToken");
router.delete("/:idd", verifyToken, controller.deletemessage);
module.exports = router;
