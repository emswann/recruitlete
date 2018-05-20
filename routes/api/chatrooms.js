const router = require("express").Router();
const chatroomsController = require("../../controllers/chatroomsController");

// Matches with "/api/chatroom/"
router
  .route("/:room")
  .get(chatroomsController.find)
  .put(chatroomsController.update)
  .delete(chatroomsController.remove);

module.exports = router;
