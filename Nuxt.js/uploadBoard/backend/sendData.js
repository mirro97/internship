const router = require('express')()
const contentList = require('./contentData.json')

router.get('/', function (req, res, next) {
  res.send(contentList)
})

module.exports = router
