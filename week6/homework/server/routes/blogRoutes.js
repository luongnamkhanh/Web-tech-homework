const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController.js');


router.get('/', blogController.homePage);
router.get('/deleteblog/:id', blogController.deleteBlog);


module.exports = router;