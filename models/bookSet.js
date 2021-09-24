const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  bookID: String,
  title: String,
  author: String,
  yearPub: String,
  description: String,
  quantity: Number
})

const bookSet = mongoose.model('bookSet', BookSchema);

module.exports = bookSet;