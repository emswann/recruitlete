const router = require("express").Router();
const athletesController = require("../../controllers/athletesController");

// Matches with "/api/athletes"
router
  .route("/")
  .get(athletesController.findAll)
  .post(athletesController.create);

// Matches with "/api/athletes/:id"
router
  .route("/:id")
  .get(athletesController.findById)
  .put(athletesController.update)
  .delete(athletesController.remove);

module.exports = router;
