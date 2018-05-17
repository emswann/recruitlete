const router = require("express").Router();
const chatroomsController = require("../../controllers/chatroomsController");

// Matches with "/api/chatroom/"
router
  .route("/")
  .get(chatroomsController.find)
  .put(chatroomsController.update)
  .delete(chatroomsController.remove);

module.exports = router;
