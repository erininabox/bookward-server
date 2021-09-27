const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/bookwarddb';

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.connect(connectionString, configOptions)
  .then(() => console.log('MongoDB successfully connected...'))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
  bookSet: require('./bookSet'),
  teacher: require('./teacher'),
  lendingModel: require('./lendingModel')
}