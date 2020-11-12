const express = require("express")
const router = express.Router()

const Bet = require("../models/Bet.model")
const checkAuth = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

router.post('/crear-apuesta', (req, res, next) => {

    Bet.create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/lista-apuestas', (req, res, next) => {

    Bet.find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/detalle-apuesta/:id', (req, res, next) => {

    Bet.findById(req.params.id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.put('/detalle-apuesta/:id/edit-status', (req, res, next) =>{

    let statusProcessed = ""
    let profitValue = 0

    if(req.body.status === "win") {
        profitValue = (req.body.stake * req.body.price) - req.body.stake
        statusProcessed = {status: 'win', profit: profitValue}

    } else if (req.body.status === "loss") {
        profitValue =- req.body.stake
        statusProcessed = {status: 'loss', profit: profitValue}
    
    } else if (req.body.status === "void") {
        statusProcessed = {status: 'void'}

    } else {
        statusProcessed = {status: 'pending', profit: profitValue}
    }

    Bet.findByIdAndUpdate(req.params.id, statusProcessed, {new: true})
        .then((bet) => res.json(bet))
        .catch(err => next(err))

})

module.exports = router