const User = require('../models/user');
const bcrypt = require('bcrypt');


const signupUser = async (req, res) => {
  try {
    const { name, email, password, role, skills } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please fill all required fields.' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: role || 'student',
      skills: skills || [],
    });

    await user.save();

    return res.status(201).json({
      message: 'Signup successful!',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        skills: user.skills,
      },
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error. Please try again.' });
  }
};


const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); 
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = {
  signupUser,
  getAllUsers,
  getUserById,
};
