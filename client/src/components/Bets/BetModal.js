import React, { useState, Fragment } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'
import BetService from '../../service/BetService'

const BetModal = () => {
    
    const betservice = new BetService()

    const [ modal, openModal ] = useState(false)

    const [ bet, createBet] = useState({
        bookie: '',
        racecourse: '',
        race: '',
        betName: '',
        stake: '',
        price: '',
        betCode: ''
    })

    const handleClose = () => openModal(false)
    const handleShow = () => openModal(true)
    
    const updateBetState = e => {

        createBet({
            ...bet,
            [e.target.name] : e.target.value
        })
    }

    const saveBet = () => {

        betservice
            .saveBet(bet)
            .then (() => props.history.push('/'))
            .catch(err => console.log(err))
    }

    const racecoursesArray = [
        '--- Selecciona un Hipódromo ---',
        'Aix Les Bains',
        'Amiens',
        'Angers',
        'Argentan',
        'Bordeaux le Bouscat',
        'Cagnes Sur Mer',
        'Chantilly',
        'Chateaubriant',
        'Cholet',
        'Clairefontaine',
        'Compiegne',
        'Craon',
        'Dax',
        'Deauville',
        'Dieppe',
        'Dos Hermanas',
        'Evreux',
        'Fontainebleau',
        'La Teste de Buch',
        'Le Croise Laroche',
        "Le Lion d'Angers",
        'Le Mans',
        'Le Touquet',
        "Les Sables D'Olonne",
        'Longchamp',
        'Lyon La Soie',
        'Lyon Parilly',
        'Machecoul',
        'Marseille Borely',
        'Marseille Vivaux',
        'Mont de Marsan',
        'Moulins',
        'Nancy',
        'Nantes',
        'Pau',
        'Pineda',
        'Pornichet',
        'Saint Cloud',
        'Saint Malo',
        'Salon de Provence',
        'San Sebastián',
        'Sanlucar',
        'Senonnes-Pouance',
        'Strasbourg',
        'Tarbes',
        'Toulouse',
        'Vichy',
        'Vittel',
        'Zarzuela'
    ]

    const stakeArray = [
        '--- Selecciona un Stake ---',
        0.05,
        0.1,
        0.15,
        0.2,
        0.25,
        0.3,
        0.4,
        0.5,
        0.75,
        1,
        1.25,
        1.5,
        2,
        3,
        4,
        5
    ]

    return (
        <Fragment>
            <Button 
                     
                    variant="outline-dark"
                    onClick = {handleShow}
                >Nueva Apuesta
            </Button>
            <Modal  show={modal} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear una Apuesta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit = {saveBet}
                    >
                        <Form.Group onChange = {updateBetState}>
                            <Form.Label>Bookie:</Form.Label>
                            <Form.Control required name = "bookie" onChange = {updateBetState}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Hipódromo:</Form.Label>
                            <Form.Control as = "select" required name = "racecourse" onChange = {updateBetState}>
                                {racecoursesArray.map(elm => (
                                    <option>{elm}</option>
                                ))}  
                            </Form.Control>
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
                            <Form.Control as = "select" required name = "stake" onChange = {updateBetState}>
                                {stakeArray.map(elm => (
                                        <option>{elm}</option>
                                    ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Cuota:</Form.Label>
                            <Form.Control required name = "price" onChange = {updateBetState}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Código:</Form.Label>
                            <Form.Control as = "select" required name = "betCode" onChange = {updateBetState}>
                                <option>--- Selecciona un Código ---</option>
                                <option>PF 2A</option>
                                <option>PF 3A</option>
                                <option>PF VJOS</option>
                                <option>PF MIX</option>
                                <option>REC 2A</option>
                                <option>REC 3A</option>
                                <option>REC VJOS</option>
                                <option>REC MIX</option>
                                <option>HDCP 2A</option>
                                <option>HDCP 3A</option>
                                <option>HDCP VJOS</option>
                                <option>HDCP MIX</option>
                                <option>COMBI</option>
                            </Form.Control>    
                        </Form.Group>        
                        {/* <Form.Group>
                            <Form.Label>Fecha:</Form.Label>
                            <DatePicker 
                                selected={startDate} 
                                onChange={date => setStartDate(date)} 
                                name = "date"
                                dateFormat= "MM/dd/yyyy" 
                            />
                        </Form.Group> */}
                        <Button variant="success" type = "submit">
                            Crear
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}
 
export default BetModal;