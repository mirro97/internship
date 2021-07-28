// const express = require('express')
// const router = express.Router()
const router = require('express')()

router.get('/', function (req, res, next) {
  console.log('서버 -> main 페이지')
  res.send('서버에서 클라이언트로 데이터 보내는중')
  // res.json({ data: 'data' })
})

module.exports = router
