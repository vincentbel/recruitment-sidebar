/**
 * Author: VincentBel
 * Date: 16/4/1
 */

/* eslint-disable no-console */
const path = require('path')
const express = require('express')
const app = express()

app.use('/static', express.static('static'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, err => {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:3000')
})
