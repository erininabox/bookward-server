const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lendingSchema = new Schema({
  borrowDate: {
      type: Date,
      default: Date.now()
  },
  dueDate: {
      type: Date,
      default: () => new Date(+new Date() + 21*24*60*60*1000),
      required: true
  },
  returnDate: Date,
  teacher: [{ type: Schema.Types.ObjectId, ref: 'teacher' }],
  bookSet: [{ type: Schema.Types.ObjectId, ref: 'bookSet' }]
})

const lendingModel = mongoose.model('lendingModel', lendingSchema);

module.exports = lendingModel;