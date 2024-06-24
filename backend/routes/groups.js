const controller = require("../controllers/controller");
const express = require("express");
const router = express.Router();
const {verifyToken} = require("../utils/verifyToken");
router.get("/", verifyToken,controller.getgroups);
module.exports = router;
