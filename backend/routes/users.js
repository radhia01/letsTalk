const controller = require("../controllers/controller");
const express = require("express");
const {verifyToken}=require("../utils/verifyToken")
const router = express.Router();
const middleware = require("../middleware/middleware");
router.get("/", verifyToken,controller.getusers);
module.exports = router;
