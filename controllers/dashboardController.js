// Defining methods for the dashboardController
module.exports = {
  get: (req, res) => 
    res.status(200).json({
      message: "You're authorized to see this secret message.",
      // user values passed through from auth middleware
      user: req.user
    })
};
