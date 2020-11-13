import React, { useState } from 'react'

import AuthService from '../../service/AuthService'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'

const Login = (props) => {

    const [ user, updateUser ] = useState({})

    const errorMessage = ""
    const authservice = new AuthService()

    const updateUserState = e => {

        updateUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const loginForm = () => {

        authservice
            .login(user)
            .then((response) => {
                props.setTheUser(response.data)
                props.history.push('/')
            })
            .catch(err => errorMessage = err.response.data.message)
    }
    
    return (
        <Container as = "main">
            <Row>
                <Col md = {{ offset: 3, span: 6}}>
                    <h3>Inicio de sesión</h3>
                    <hr/>
                    <Form onSubmit = {loginForm}>
                        <Form.Group>
                            <Form.Label>Nombre de usuario</Form.Label>
                            <Form.Control
                                onChange={updateUserState}
                                name="username"
                                type="text"
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                onChange={updateUserState}
                                name="password"
                                type="password"
                            />
                        </Form.Group>
                        {errorMessage &&
                            <p className = "errorMessage">{errorMessage}</p>
                        }
                        <Button variant="dark" type="submit">
                            Iniciar sesión
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Login;