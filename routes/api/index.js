const router = require("express").Router();
const articlesRoutes = require("./articles");
const coachesRoutes = require("./coaches");
const athletesRoutes = require("./athletes");

// All API subroutes
router.use("/articles", articlesRoutes);
router.use("/coaches", coachesRoutes);
router.use("/athletes", athletesRoutes);

module.exports = router;
