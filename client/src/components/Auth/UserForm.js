import React, { useState, useEffect } from 'react';

import AuthService from '../../service/AuthService'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

const UserForm = (props) => {

    const authService = new AuthService()

    const [ newUser, createNewUser ] = useState({
        username: "",
        password: "",
        name: "",
        lastName: "",
        email: "",
        phone: ""
    })

    const [ error, updateError ] = useState({
        errorMessage: ""
    })

    const { username, password, name, lastName, email, phone } = newUser

    const { errorMessage } = error

    const handleInputChange = e => {

        createNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        authService
            .signUp(newUser)
            .then (() => {
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
                <Col md = {{ offset: 3, span: 6 }}>
                    <h3 className = "form-titles">Formulario de Registro</h3>
                    <hr/>
                    <Form onSubmit = {handleFormSubmit}>
                        <Form.Group>
                            <Form.Label>Nombre de Usuario *</Form.Label>
                            <Form.Control  onChange = {handleInputChange} value = {username} name = "username" type = "text"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraseña *</Form.Label>
                            <Form.Control  onChange={handleInputChange} value = {password} name = "password" type="password" />
                            <Form.Text className="text-muted">La contraseña debe ser al menos de 8 caracteres</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Nombre *</Form.Label>
                            <Form.Control  onChange={handleInputChange} value = {name} name="name" type="text" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control onChange={handleInputChange} value = {lastName} name="lastName" type="text" />
                        </Form.Group>    
                        <Form.Group>
                            <Form.Label>Email *</Form.Label>
                            <Form.Control  onChange={handleInputChange} value = {email} name="email" type="email" placeholder = "tuemail@email.com" />
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label>Teléfono Móvil</Form.Label>
                            <Form.Control onChange={handleInputChange} value = {phone} name="phone" type="number" />
                        </Form.Group>
                        {errorMessage &&
                            <p className = "errorMessage">{errorMessage}</p>
                        }
                        <div className = "row" className = "text-center">
                        <Button 
                            variant="dark"  
                            type="submit"
                        >Enviar</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
 
export default UserForm;