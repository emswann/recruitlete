const router = require("express").Router();
const authController = require("../../controllers/authController");

// Matches with "/auth/signup"
router
  .route("/signup")
  .post(authController.signup);

// Matches with "/auth/login"
router
  .route("/login")
  .post(authController.login);

module.exports = router;
