const db = require("../models");

// Defining methods for the chatroomsController
module.exports = {
  findAll: (req, res) => {
    db.Chatrooms
      .find({ })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));    
  },
  find: (req, res) => {
    db.Chatrooms
      .findOne({ room: req.params.room })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    db.Chatrooms
      .findOneAndUpdate({ room: req.params.room }, 
                        { $push: { users: req.body.username } },
                        { new: true, runValidators: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Chatrooms
      .findOneAndUpdate({ room: req.params.room },
                        { $pull: { users: req.params.username } },
                        { new: true, runValidators: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

