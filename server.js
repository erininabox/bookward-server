const express = require('express');
const cors = require('cors');
const booksController = require('./controllers/booksController.js');
const teacherController = require('./controllers/teacherController');
// const lendingController = require('./controllers/lendingController');

const PORT = process.env.PORT || 4000;
const rowdy = require('rowdy-logger');
const app = express();
const rowdyResults = rowdy.begin(app);


app.use(cors())
app.use(express.json())

app.use('/books', booksController);
app.use('/teachers', teacherController);
// app.use('/books/:id/lending', lendingController);

app.get('/', (req, res) => {
  res.send('you hit the home route!')
})


app.listen(PORT, () => {
  console.log(`the server is running on: ${PORT}`)
  rowdyResults.print()
})