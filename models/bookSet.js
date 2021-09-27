const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: String,
  yearPub: String,
  description: String,
  quantity: Number,
  lendingRecord: [{ type: Schema.Types.ObjectId, ref: 'lendingModel' }]
})

const bookSet = mongoose.model('bookSet', BookSchema);

module.exports = bookSet;