const express = require("express")
const router = express.Router()
const BetController = require('../controllers/BetController')
const verifyToken = require('../middlewares/validate-token')

router.post('/crear-apuesta', BetController.saveBet) // PROTEGER

router.post('/crear-parametro', BetController.saveParameter) // PROTEGER

router.get('/', BetController.readHomeBets)

router.get('/lista-apuestas/total', BetController.numberBets) // PROTEGER

router.get('/lista-apuestas/', BetController.betsList) // PROTEGER

router.get('/lista-hipodromos', BetController.getRacecourses) // PROTEGER

router.get('/lista-stakes', BetController.getStakes) // PROTEGER

router.get('/lista-codigos', BetController.getBetCodes) // PROTEGER

router.get('/stats/:year', BetController.statsByYear)

router.get('/detalle-apuesta/:id', BetController.betDetails)

router.put('/detalle-apuesta/:id/edit-status', BetController.editBetStatus) // PROTEGER

router.put('/detalle-apuesta/:id/edit', BetController.editBet) // PROTEGER

router.delete('/detalle-apuesta/:id/delete', BetController.deleteBet) // PROTEGER


module.exports = router