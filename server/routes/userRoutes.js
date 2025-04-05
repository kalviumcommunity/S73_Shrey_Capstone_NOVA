const express = require('express');
const router = express.Router();
const { signupUser } = require('../controllers/userControllers');

router.post('/signup', signupUser);

module.exports = router;
