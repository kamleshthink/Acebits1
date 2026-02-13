const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const { uploadResource, getAllResources } = require('../controllers/resourceController');

const upload = multer({ storage });

router.route('/')
    .get(getAllResources)
    .post(upload.single('file'), uploadResource);

module.exports = router;
