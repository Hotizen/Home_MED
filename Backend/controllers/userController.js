const User = require('../models/userModel');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({ name, email, password });
  await user.save();

  res.status(201).json({ message: 'User registered successfully' });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  res.json({ message: 'Login successful', user });
};

module.exports = { registerUser, loginUser };
