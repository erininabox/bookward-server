const express = require('express');
const cors = require('cors');
const models = require('./models');
const booksController = require('./controllers/booksController.js');
const PORT = process.env.PORT || 8000;
const rowdy = require('rowdy-logger');
const app = express();
const rowdyResults = rowdy.begin(app);

app.use(express.json())
app.use(cors())

app.use('/books', booksController);

app.get('/', (req, res) => {
  res.send('you hit the home route!')
})


app.listen(PORT, () => {
  console.log('the server is listening!')
  rowdyResults.print()
})