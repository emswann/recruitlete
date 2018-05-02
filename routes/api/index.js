const router = require("express").Router();
const coachesRoutes = require("./coaches");
const athletesRoutes = require("./athletes");

// Articles routes
router.use("/coaches", coachesRoutes);
router.use("/athletes", athletesRoutes);

module.exports = router;
