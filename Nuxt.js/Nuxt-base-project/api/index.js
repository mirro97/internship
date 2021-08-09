import express from 'express'
import board from 'board'

const app = express()
app.use('/board', board)

app.get('/', (req, res) => {
  res.send('api!')
})

module.exports = {
  path: '/api',
  handler: app,
}
