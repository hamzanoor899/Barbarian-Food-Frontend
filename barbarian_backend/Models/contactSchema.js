const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "this email already taken"],
  },
  phone: {
    type: Number,
    required: true,
  },
  services: {
    type: String,
    required: true,
  },
  starting_date: {
    type: Date,
    required: true,
  },
  ending_date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", contactSchema);
