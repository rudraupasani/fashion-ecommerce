const express = require('express')
const routes = express.Router()
const userModal = require('../modals/user.modal')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');




routes.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExsist = await userModal.findOne({ email })

    if (userExsist) {
      res.status(409).json({ massage: "User is Already Exsist" })
    }

    const user = await userModal.create({
      username,
      email,
      password,
    });
    res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


routes.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userModal.findOne({ username, password });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      {
        userid: user._id,
        username: user.username,
      },
      "rudra",
      { expiresIn: '1h' }
    );

    // ✅ Set the cookie BEFORE sending response
    res.cookie("token", token, { httpOnly: true });
    return res.status(200).json({ message: "Login successful" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});


routes.post('/forgotpassword', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModal.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await userModal.findOneAndUpdate(
      { email },
      { password: password },
    );

    res.status(202).json({ message: "Password has been changed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


module.exports = routes