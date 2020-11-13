import axios from 'axios'

export default class BetService {

    constructor() {

        this.service = axios.create({

            baseURL: 'http://localhost:5000/api', //CAMBIAR PARA DEPLOY
            withCredentials: true
        })
    }

    saveBet = bet => this.service.post(`/apuestas/crear-apuesta`, bet)
    getAllBets = () => this.service.get('/apuestas/lista-apuestas')
    getHomeBets = () => this.service.get('/apuestas')
    getOneBet = id => this.service.get(`/apuestas/detalle-apuesta/${id}`)
    updateBetStatus = (id, status) => this.service.put(`/apuestas/detalle-apuesta/${id}/edit-status`, status)
    updateBet = (id, bet) => this.service.put(`/apuestas/detalle-apuesta/${id}/edit`, bet)

}