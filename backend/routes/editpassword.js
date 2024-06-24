const controller = require("../controllers/controller");
const express = require("express");
const router = express.Router();
const {verifyToken} = require("../utils/verifyToken");
router.put("/",verifyToken, controller.editpassword);
module.exports = router;
