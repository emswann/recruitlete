const router = require("express").Router();
const dashboardController = require("../../controllers/dashboardController");

router.route("/")
  .get(dashboardController.get)

module.exports = router;