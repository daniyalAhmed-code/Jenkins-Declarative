
const express = require('express')
const app = express()
const port = 3100
var moment = require('moment');

app.get('/', (req, res) => {
  res.send("I'm Chimkadari ka bacha!!!")
})
console.log(moment.version)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
