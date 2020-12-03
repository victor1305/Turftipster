import React, { useState } from 'react'

import AuthService from '../../service/AuthService'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'

const Login = (props) => {

    const [ user, updateUser ] = useState({
        username: "",
        password: ""
    })

    const [ error, updateError ] = useState({
        errorMessage: ""
    })

    const { username, password } = user

    const { errorMessage } = error

    const authService = new AuthService()

    const updateUserState = e => {

        updateUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const loginForm = (e) => {

        e.preventDefault()

        authService
            .login(user)
            .then((response) => {
                updateUser(response.data)
                props.fetchUser()
                props.history.push('/')
            })
            .catch(err => updateError({
                errorMessage: err.response.data.message
            }))
    }
    
    return (
        <Container as = "main" className = "forms-container">
            <Row>
                <Col md = {{ offset: 3, span: 6}}>
                    <h3 className = "form-titles">Inicio de sesión</h3>
                    <hr/>
                    <Form onSubmit = {loginForm}>
                        <Form.Group>
                            <Form.Label>Nombre de usuario</Form.Label>
                            <Form.Control
                                onChange={updateUserState}
                                name="username"
                                value = {username}
                                type="text"
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                onChange={updateUserState}
                                name="password"
                                value = {password}
                                type="password"
                            />
                        </Form.Group>
                        {errorMessage &&
                            <p className = "errorMessage">{errorMessage}</p>
                        }
                        <div className = "row text-center">
                        <Button variant="dark" type="submit">
                            Iniciar sesión
                        </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Login;