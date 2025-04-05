const express = require('express');
const router = express.Router();
const {
  signupUser,
  getAllUsers,
  getUserById,
} = require('../controllers/userControllers');


router.post('/signup', signupUser);


router.get('/all-users', getAllUsers);


router.get('/:id', getUserById);

module.exports = router;
