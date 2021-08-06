// const express = require('express')
// const router = express.Router()
const path = require('path')
const fs = require('fs')
const router = require('express')()

const userUploadRoot = path.join(__dirname, '..', 'FileStorage', 'userUpload')
router.get('/getUserUploadFile', (req, res) => {
  const filePath = path.join(userUploadRoot, req.query.fileName)
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath)
    return
  }
  res.send('error image')
})
module.exports = router
