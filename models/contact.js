const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const validator = require("validator");

const contactSchema = new Schema({
  email  : { type: String, trim: true,
             validate: {
               validator: validator.isEmail,
               message  : "{VALUE} is not a valid email",
               isAsync  : false
             }
           },
  phone  : { type: String, trim: true},
  url    : { type: String, trim: true,
             validate: {
               validator: validator.isURL,
               message  : "{VALUE} is not a valid website",
               isAsync  : false
             }
           }
}, { _id: false });

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
