const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.post('/registro', UserController.registro)

router.post('/iniciar-sesion-turftipster', UserController.login)

module.exports = router