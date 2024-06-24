const controller = require("../controllers/controller");
const express = require("express");
const router = express.Router();
const {verifyToken} = require("../utils/verifyToken");
router.post("/",  verifyToken, controller.addmessagetogroup);
module.exports = router;
