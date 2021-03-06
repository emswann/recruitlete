const db = require("../models");

// Defining methods for the athletesController
module.exports = {
  find: (req, res) => {
    db.Athletes
      .findOne({ email: req.user.email })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    db.Athletes
      .findOneAndUpdate({ email: req.user.email }, req.body,
                        { new: true, runValidators: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Athletes
      .findOneAndRemove({ email: req.user.email })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

