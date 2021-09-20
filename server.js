const express = require('express')
const app = express()
// const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger')  //so we don't have to restart our server with every change we make to our code or package.json
const routesReport = rowdy.begin(app)

app.use(express.json())   //prepares our api to receive json data from the body of all incoming requests.

app.get('/puppies', (req, res) => {
  res.send('You have reached the GET /puppies route!')
})

app.listen(3000, () => {
  console.log('the server is listening!')
  routesReport.print()
})