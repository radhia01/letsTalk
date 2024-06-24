const controller = require("../controllers/controller");
const express = require("express");
const router = express.Router();
const {verifyToken} = require("../utils/verifyToken");
router.delete("/", verifyToken,controller.deleteUser);
module.exports = router;
