const router = require("express").Router();
const authRoutes = require("./auth");

// Authentication routes
router.use("/", authRoutes);

module.exports = router;
