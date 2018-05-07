const router = require("express").Router();
const coachesController = require("../../controllers/coachesController");

// Matches with "/api/coach"
router
  .route("/")
  .get(coachesController.find)
  .put(coachesController.update)
  .delete(coachesController.remove);

module.exports = router;
