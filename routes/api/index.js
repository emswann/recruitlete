const router = require("express").Router();
const articlesRoutes = require("./articles");
const coachesRoutes = require("./coaches");
const athletesRoutes = require("./athletes");
const schoolsRoutes = require("./schools");
const chatroomsRoutes = require("./chatrooms");

// All API subroutes
router.use("/articles", articlesRoutes);
router.use("/coach", coachesRoutes);
router.use("/athlete", athletesRoutes);
router.use("/schools", schoolsRoutes);
router.use("/chatrooms", chatroomsRoutes);

module.exports = router;
