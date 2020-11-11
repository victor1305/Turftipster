import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'
//import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"

const Bets = () => {

    const [ modal, openModal ] = useState(false)

    const [ bet, createBet] = useState({
        bookie: '',
        racecourse: '',
        race: '',
        betName: '',
        stake: '',
        price: '',
        date: ''
    })

    const handleClose = () => openModal(false)
    const handleShow = () => openModal(true)

    //const [ startDate, setStartDate ] = useState(new Date())

    const updateBetState = e => {

        createBet({
            ...bet,
            [e.target.name] : e.target.value
        })
    }

    // const saveBet = () => {
    //     betService
    //     .saveBet(bet)
    //     .then (() => console.log("Apuesta Creada"))
    //     .catch(err => console.log(err))
    // }

    return (
        <div className = "bets-buttons-container">
            <Button 
                className = "new-bet-btn" 
                variant="outline-dark"
                onClick = {handleShow}
            >Nueva Apuesta
            </Button>
            <Button variant="outline-info">Editar Apuestas</Button>

            <Modal  show={modal} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear una Apuesta</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form
                        // onSubmit = {saveBet}
                    >
                        <Form.Group onChange = {updateBetState}>
                            <Form.Label>Bookie:</Form.Label>
                            {/* <Form.Check name = "bookie" label = "Bet365" name = "bookie" value = "Bet365"/>
                            <Form.Check label = "William Hill" name = "bookie" value = "William Hill"/>
                            <Form.Check label = "Sportium" name = "bookie" value = "Sportium"/>
                            <Form.Check label = "Betfair" name = "bookie" value = "Betfair"/> */}
                            <Form.Control required name = "bookie" onChange = {updateBetState}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Hipódromo:</Form.Label>
                            <Form.Control required name = "racecourse" onChange = {updateBetState}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Carrera:</Form.Label>
                            <Form.Control required name = "race" onChange = {updateBetState}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Apuesta:</Form.Label>
                            <Form.Control required name = "betName" onChange = {updateBetState}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Stake:</Form.Label>
                            <Form.Control required name = "stake" onChange = {updateBetState}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Cuota:</Form.Label>
                            <Form.Control required name = "price" onChange = {updateBetState}/>
                        </Form.Group>       
                        {/* <Form.Group>
                            <Form.Label>Fecha:</Form.Label>
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} name = "date" onChange = {updateBetState}/>
                        </Form.Group> */}
                    </Form>
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Crear
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
 
export default Bets;