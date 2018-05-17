const db = require("../models");

// Defining methods for the chatroomsController
module.exports = {
  find: (req, res) => {
    db.Chatrooms
      .findOne({ room: req.body.room })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    db.Chatrooms
      .findOneAndUpdate({ room: req.body.room }, req.body,
                        { new: true, runValidators: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Chatrooms
      .findOneAndRemove({ room: req.body.room })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

