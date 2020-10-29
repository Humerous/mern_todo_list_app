const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//CREATE NEW SCHEMA - USER
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  register_date: {
    type: {
      type: Date,
      default: Date.now,
    },
  },
});

module.exports = User = mongoose.model('user', UserSchema);
