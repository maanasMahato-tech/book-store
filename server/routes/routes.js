const express = require('express');
const { sendBookApi, getBookApi } = require('../controller/controller');
const { upload } = require('../helper/multer');


const router = express.Router();

router.post('/send-book-api', upload.single('file'), sendBookApi);
router.get('/get-book-api', getBookApi);

module.exports = { router };