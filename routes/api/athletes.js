const router = require("express").Router();
const athletesController = require("../../controllers/athletesController");

// Matches with "/api/athlete/"
router
  .route("/")
  .get(athletesController.find)
  .put(athletesController.update)
  .delete(athletesController.remove);

module.exports = router;
