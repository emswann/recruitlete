const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const bcrypt   = require("bcryptjs");

const usersSchema = new Schema({
  email   : { type: String, lowercase: true, unique: true, required: true },
  // Password criteria :
  // ^	          The password string will start this way
  // (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
  // (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
  // (?=.*[0-9])	The string must contain at least 1 numeric character
  // (?=.[!@#\$%\^&])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
  // (?=.{8,})	The string must be eight characters or longer
  //  ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})
  password: { type: String, required: true },
  role    : { type: String, lowercase: true,
              enum: ["coach", "athlete"]
            }
}, { timestamps: true });

// Method to compare password for login
usersSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

// Pre-save of user to database, hash password if password is modified or new
usersSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
