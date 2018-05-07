const db = require("../models");

// Defining methods for the coachesController
module.exports = {
  find: (req, res) => {
    db.Coaches
      .findOne(req.body.email)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    db.Coaches
      .findOneAndUpdate({ email: req.body.email }, req.body,
                        { new: true, runValidators: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Coaches
      .findOneAndRemove({ email: req.body.email })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
