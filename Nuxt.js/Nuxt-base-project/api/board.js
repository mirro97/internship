import express from 'express'
import { service } from './service/service'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('api!')
})

router.get('/list', async (req, res) => {
  const boardList = await service.getBoard()
  res.json(boardList)
})
router.post('/list', async (req, res) => {
  const boardList = await service.getBoard()
  res.json(boardList)
})

router.get('/:boardIdx', (req, res, next) => {
  console.log(req.params, req.query, req.body)
  next()
})

router.post('/:boardIdx', (req, res) => {
  res.json({})
})

router.post('/write', (req, res) => {
  res.json({ bResult: true })
})

router.post('/delete', (req, res) => {
  res.json({ bResult: true })
})

module.exports = router