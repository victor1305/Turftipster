import React, { useState, Fragment, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'
import BetService from '../../service/BetService'

const BetModal = (props) => {

    const betservice = new BetService()

    const [ modal, openModal ] = useState(false)

    const [ bet, createBet] = useState({
        
    })    

    useEffect(() => {
        
        createBet ({
            bookie: props.bookie,
            racecourse: props.racecourse,
            race: props.race,
            betName: props.betName,
            price: props.price,
            stake: props.stake,
            status: props.status,
            position: props.position,
            date: props.date,
            betCode: props.betCode
        })
    }, [props])

    const handleClose = () => openModal(false)
    const handleShow = () => openModal(true)
    
    const updateBetState = e => {

        createBet({
            ...bet,
            [e.target.name] : e.target.value
        })
    }

    const saveBet = e => {

        e.preventDefault()

        betservice
            .saveBet(bet)
            .then (() => handleClose(),
            props.history.push('/apuestas'))
            .catch(err => console.log(err))
    }

    const updateBet = e => {

        e.preventDefault()

        const id = props.match.params.id

        betservice
            .updateBet(id, bet)
            .then (() => handleClose(), props.history.push('/apuestas'))
            .catch(err => console.log(err))
    }

    const racecoursesArray = [
        '--- Selecciona un Hipódromo ---',
        'Aix Les Bains',
        'Amiens',
        'Angers',
        'Argentan',
        'Auteil',
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
        'Delta Downs',
        'Dieppe',
        'Dos Hermanas',
        'Evreux',
        'Fontainebleau',
        'Gulfstream Park',
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
        'Meydan',
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
        'Tampa Bay',
        'Tarbes',
        'Toulouse',
        'Vichy',
        'Vittel',
        'Will Rogers Downs',
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
            {props.loggedInUser &&
            <div>
            {props.loggedInUser.role === "admin" &&
            <Button       
                variant="outline-dark"
                className = {props.match.path.includes('detalle') ? "details-btn-container" : ""}
                onClick = {handleShow}
            >{props.match.path.includes('detalle') ? "Editar Apuesta" : "Nueva Apuesta"}</Button>
            }
            </div>
            }
            <Modal  show={modal} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    {props.match.path.includes('detalle') ?
                    <Modal.Title>Editar Apuesta</Modal.Title>
                    :
                    <Modal.Title>Crear Apuesta</Modal.Title>
                    }
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit = { props.match.path.includes('detalle') ? updateBet : saveBet}
                    >
                        <Form.Group onChange = {updateBetState}>
                            <Form.Label>Bookie:</Form.Label>
                            <Form.Control required name = "bookie" onChange = {updateBetState} defaultValue = {props.bookie}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Hipódromo:</Form.Label>
                            <Form.Control as = "select" required name = "racecourse" onChange = {updateBetState} defaultValue = {props.racecourse}>
                                {racecoursesArray.map(elm => (
                                    <option key = {elm}>{elm}</option>
                                ))}  
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Carrera:</Form.Label>
                            <Form.Control required name = "race" onChange = {updateBetState} defaultValue = {props.race}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Apuesta:</Form.Label>
                            <Form.Control required name = "betName" onChange = {updateBetState} defaultValue = {props.betName}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Stake:</Form.Label>
                            <Form.Control as = "select" required name = "stake" onChange = {updateBetState} defaultValue = {props.stake}>
                                {stakeArray.map(elm => (
                                        <option key = {elm}>{elm}</option>
                                    ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Cuota:</Form.Label>
                            <Form.Control required name = "price" onChange = {updateBetState} defaultValue = {props.price}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Código:</Form.Label>
                            <Form.Control as = "select" required name = "betCode" onChange = {updateBetState} defaultValue = {props.betCode}>
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
                        {props.match.path.includes('detalle') &&  
                        <Form.Group>
                            <Form.Label>Fecha:</Form.Label>
                            <Form.Control name = "date" onChange = {updateBetState} defaultValue = {props.date}/>
                        </Form.Group>
                        }
                        <Form.Group>
                            <Form.Label>Posición:</Form.Label>
                            <Form.Control name = "position" onChange = {updateBetState} defaultValue = {props.position}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Estado:</Form.Label>
                            <Form.Control as = "select" required name = "status" onChange = {updateBetState} defaultValue = {props.status}>
                                <option>--- Selecciona un Estado ---</option>
                                <option>win</option>
                                <option>loss</option>
                                <option>void</option>
                                <option>pending</option>
                            </Form.Control>    
                        </Form.Group>
                        <Button variant="success" type = "submit">
                            {props.match.path.includes('detalle') ? "Editar" : "Crear"}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}
 
export default BetModal;