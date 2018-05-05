const router = require("express").Router();
const schoolsController = require("../../controllers/schoolsController");

router.route("/")
    .get(schoolsController.findAll)

module.exports = router;