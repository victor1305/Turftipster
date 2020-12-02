const express = require("express")
const router = express.Router()

const Bet = require("../models/Bet.model")
const checkAuth = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

router.post('/crear-apuesta', (req, res, next) => {

    Bet.create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/', (req, res, next) => {

    Bet.find({status: { "$ne": "pending"}}).sort({date: -1}).limit(6)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/lista-apuestas', (req, res, next) => {

    Bet.find().sort({date: -1})
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/stats/:year', (req, res, next) => {

    console.log("PARAAAAAAMS", req.params)
    console.log("body", req.body)

    let year = req.params.year

    Bet.find({date:{$gte: `${year}-01-01T00:00:00Z`,$lte: `${year}-12-31T23:59:59Z`}, status: { "$ne": "pending"}})
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
        statusProcessed = {status: 'void', profit: profitValue}

    } else {
        statusProcessed = {status: 'pending', profit: profitValue}
    }

    Bet.findByIdAndUpdate(req.params.id, statusProcessed, {new: true})
        .then((bet) => res.json(bet))
        .catch(err => next(err))

})

router.put('/detalle-apuesta/:id/edit', (req, res, next) =>{


    let statusProcessed = {}
    let profitValue = 0

    if(req.body.status === "win") {
        profitValue = (req.body.stake * req.body.price) - req.body.stake
        statusProcessed = {profit: profitValue}

    } else if (req.body.status === "loss") {
        profitValue =- req.body.stake
        statusProcessed = {profit: profitValue}
    
    } else if (req.body.status === "void") {
        statusProcessed = {profit: profitValue}

    } else {
        statusProcessed = {profit: profitValue}
    }

    const newBody = Object.assign(req.body, statusProcessed)

    Bet.findByIdAndUpdate(req.params.id, newBody, {new: true})
        .then((bet) => res.json(bet))
        .catch(err => next(err))
})


module.exports = router