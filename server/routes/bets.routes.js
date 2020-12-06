const express = require("express")
const router = express.Router()

const Bet = require("../models/Bet.model")
const checkAuth = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/')

router.post('/crear-apuesta', checkAuth, (req, res, next) => {

    if (req.body.status === "win") {

        req.body.profit = (req.body.stake * req.body.price) - req.body.stake
    }

    else if (req.body.status === "loss") {

        req.body.profit = - req.body.stake
    }

    Bet.create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/', (req, res, next) => {

    Bet.find({status: { "$ne": "pending"}}).sort({date: -1}).limit(6)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/lista-apuestas/total', (req, res, next) => {

    Bet.find().count()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/lista-apuestas/', (req, res, next) => {

    const limit = parseInt(req.query.limit)
    const skip = parseInt(req.query.skip)

    Bet.find().sort({date: -1}).skip(skip).limit(limit)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/stats/:year', (req, res, next) => {

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

router.put('/detalle-apuesta/:id/edit-status', checkAuth, (req, res, next) =>{

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

router.put('/detalle-apuesta/:id/edit', checkAuth, (req, res, next) =>{

    console.log(req.body)


    let statusProcessed = {}
    let profitValue = 0

    if(req.body.status === "win") {
        profitValue = (req.body.stake * req.body.price) - req.body.stake

    } else if (req.body.status === "loss") {
        profitValue =- req.body.stake
    }

    statusProcessed = {
        profit: profitValue,
        bookie: req.body.bookie,
        racecourse: req.body.racecourse,
        race: req.body.race,
        betName: req.body.betName,
        price: req.body.price,
        stake: req.body.stake,
        status: req.body.status,
        position: req.body.position,
        date: req.body.date,
        betCode: req.body.betCode
    }

    Bet.findByIdAndUpdate(req.params.id, statusProcessed, {new: true})
        .then((bet) => res.json(bet))
        .catch(err => next(err))
})

router.delete('/detalle-apuesta/:id/delete', checkAuth, (req, res, next) => {

    Bet.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


module.exports = router