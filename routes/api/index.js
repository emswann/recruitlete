const router = require("express").Router();
const articlesRoutes = require("./articles");
const coachesRoutes = require("./coaches");
const athletesRoutes = require("./athletes");
const schoolsRoutes = require("./schools");

// All API subroutes
router.use("/articles", articlesRoutes);
router.use("/coach", coachesRoutes);
router.use("/athlete", athletesRoutes);
router.use("/schools", schoolsRoutes);

module.exports = router;
