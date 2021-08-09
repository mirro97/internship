const router = require('express')()
const contentList = require('../assets/contentData.json')

router.post('/', function (req, res, next) {
  res.send(contentList)
})

router.post('/:postId', function (req, res, next) {
  const postId = req.params.postId
  res.send(contentList[postId - 1])
})

module.exports = router
