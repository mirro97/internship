const router = require('express')()
const contentList = require('./contentData.json')

router.get('/', function (req, res, next) {
  console.log(contentList)
  res.send(contentList)
})

module.exports = router
