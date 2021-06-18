const express = require("express")
const router = express.Router()
const ClientController = require('../controllers/ClientController')
const verifyToken = require('../middlewares/validate-token')

router.post('/crear-cliente', ClientController.saveClient) // PROTEGER
router.post('/crear-informacion-pago', ClientController.savePayInfo) // PROTEGER
router.put('/editar-informacion-pago/:paymentId/:userId', ClientController.editPayInfo) // PROTEGER
router.delete('/borrar-pago/:paymentId/:clientId/:userId', ClientController.deletePayinfo) // PROTEGER
router.get('/lista-clientes', ClientController.getClientList)
router.get('/lista-administradores', ClientController.getAdminsList)
router.get('/lista-pagos/:year/:month', ClientController.getPaysList)
router.get('/informacion-cliente/:id', ClientController.getClientInfo)

module.exports = router