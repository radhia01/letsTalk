const controller = require("../controllers/controller");
const express = require("express");
const router = express.Router();
const {verifyToken} = require("../utils/verifyToken");
router.get("/invitations", verifyToken,controller.getInvitations);
module.exports = router;
