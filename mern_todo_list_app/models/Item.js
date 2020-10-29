const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//CREATE NEW SCHEMA - ITEM
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: {
      type: Date,
      default: Date.now,
    },
  },
});

module.exports = Item = mongoose.model('item', ItemSchema);
