const controller = require("../controllers/controller");
const express = require("express");
const {verifyToken}=require("../utils/verifyToken")
const router = express.Router();
router.get("/", verifyToken,controller.getusermessages);
module.exports = router;
