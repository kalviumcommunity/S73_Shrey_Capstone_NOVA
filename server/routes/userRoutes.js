const express = require('express');
const router = express.Router();
const {
  signupUser,
  getAllUsers,
  getUserById,
  updateUserProfile
} = require('../controllers/userControllers');


router.post('/signup', signupUser);


router.get('/all-users', getAllUsers);


router.get('/:id', getUserById);


router.put('/update/:id', updateUserProfile);


module.exports = router;
