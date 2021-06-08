const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const User = require('../models/User.model')

exports.registro = async (req, res) => {
  const testUser = await User.findOne({ username: req.body.username })

  if (testUser) return res.status(400).json({ error: true, message: 'El Usuario ya existe' })

  // hash contraseña
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    username: req.body.username,
    password: password,
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    role: req.body.role
  })

  try {

    const userDB = await user.save()
    res.json({
      error: null,
      data: userDB
    })
    
  } catch (error) {
    res.status(400).json(error)
  }
}

exports.login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username })
  if(!user) return res.status(400).json({ error: true, message: 'Usuario o contraseña erroneo' })

  const validatePassword = await bcrypt.compare(req.body.password, user.password)
  if(!validatePassword) return res.status(400).json({ error: true, message: 'Usuario o contraseña erroneo' })

  console.log(user)

  // JWT
  const token = jwt.sign({
    name: user.username,
    id: user._id,
    role: user.role
  }, process.env.TOKEN_SECRET)

  res.header('auth-token', token).json({
    error: null,
    data: {token}
  })
}