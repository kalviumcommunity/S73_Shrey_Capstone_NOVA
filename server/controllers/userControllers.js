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

module.exports = { signupUser };
