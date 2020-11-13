import axios from 'axios'

export default class AuthService {

    constructor() {

        this.service = axios.create({
          baseURL: process.env.REACT_APP_API_URL,
          withCredentials: true,
        });
    }

    login = credentials => this.service.post('/iniciar-sesion', credentials)
    getUser = (id) => this.service.get(`/perfil/${id}/edit`)
    signUp = credentials => this.service.post('/signup', credentials)
    logout = () => this.service.post('/cerrar-sesion')
    isLoggedIn = () => this.service.get('/loggedin')
    

}