const express = require('express')
const app = express()
// const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger')  //so we don't have to restart our server with every change we make to our code or package.json
const routesReport = rowdy.begin(app)

app.use(express.json())   //prepares our api to receive json data from the body of all incoming requests.
app.use(require('cors')())

const models = require('./models')

app.get('/catalog', async (req, res) => {
  try {
    const books = await models.bookSet.findAll()
    res.json({ books })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.listen(3000, () => {
  console.log('the server is listening!')
  routesReport.print()
})