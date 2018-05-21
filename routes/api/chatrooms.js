const router = require("express").Router();
const chatroomsController = require("../../controllers/chatroomsController");

// Matches with "/api/chatroom"
router
  .get("/:room", chatroomsController.find)
  .put("/:room", chatroomsController.update)
  .delete("/:room/:username", chatroomsController.remove)
  .get("/", chatroomsController.findAll);

module.exports = router;
