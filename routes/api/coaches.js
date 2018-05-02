const router = require("express").Router();
const coachesController = require("../../controllers/coachesController");

// Matches with "/api/coaches"
router
  .route("/")
  .get(coachesController.findAll)
  .post(coachesController.create);

// Matches with "/api/coaches/:id"
router
  .route("/:id")
  .get(coachesController.findById)
  .put(coachesController.update)
  .delete(coachesController.remove);

module.exports = router;
