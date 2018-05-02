const router = require("express").Router();
const articleRoutes = require("./articles");
const coachesRoutes = require("./coaches");
const athletesRoutes = require("./athletes");

// Articles routes
router.use("/articles", articleRoutes);
router.use("/coaches", coachesRoutes);
router.use("/athletes", athletesRoutes);

module.exports = router;
