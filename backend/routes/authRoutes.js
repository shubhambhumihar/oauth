const express = require("express");
const { login, loginwithgoogle } = require("../controllers/authcntr");

const router = express.Router();

router.route("/login").get(login);
router.route("/google").get(loginwithgoogle);
router.route("/logout").get(loginwithgoogle);

module.exports = router;
