import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import BetService from '../../service/BetService'

const BetDetail = (props) => {

    const id = props.match.params.id
    const betservice = new BetService()

    const [ betDetail, loadBetDetail ] = useState({})
    const [ modal, openModal ] = useState(false)

    useEffect(() => {
        
        if(id) {
            betservice
            .getOneBet(id)
            .then(response => loadBetDetail(response.data))
            .catch(err => console.log(err))
        }
    }, [id])

    const { date, status, bookie, racecourse, race, betName, stake, price, profit, betCode } = betDetail

    const betWin = () => {

        betDetail.status = "win"

        betservice
            .updateBetStatus(id, betDetail)
            .then(() => props.history.push('/apuestas'))
            .catch(err => console.log(err))
    }

    const betLoss = () => {

        betDetail.status = "loss"

        betservice
            .updateBetStatus(id, betDetail)
            .then(() => props.history.push('/apuestas'))
            .catch(err => console.log(err))
    }

    const betVoid = () => {

        betDetail.status = "void"

        betservice
            .updateBetStatus(id, betDetail)
            .then(() => props.history.push('/apuestas'))
            .catch(err => console.log(err))
    }

    const betPending = () => {

        betDetail.status = "pending"

        betservice
            .updateBetStatus(id, betDetail)
            .then(() => props.history.push('/apuestas'))
            .catch(err => console.log(err))
    }
    
    return (
        
        <div className = "bet-detail-container">
            <h1>Detalle de apuesta</h1>
            <p><strong>Bookie</strong>: {bookie}</p>
            <p><strong>Hipódromo: </strong>{racecourse}</p>
            <p><strong>Carrera: </strong>{race}</p>
            <p><strong>Apuesta: </strong>{betName}</p>
            <p><strong>Cuota: </strong>{price}</p>
            <p><strong>Stake: </strong>{stake}</p>
            <p><strong>Estado: </strong>{status}</p>
            <p><strong>Beneficio: </strong>{profit} Uds</p>
            <p><strong>Fecha: </strong>{date}</p>
            <p><strong>Código: </strong>{betCode}</p>

            <div >
                <Button
                    variant = "success"
                    onClick = {betWin}
                >Ganadora</Button>
                <Button
                    className = "details-btn-container"
                    variant = "primary"
                    onClick = {betVoid}
                >Nula</Button>
                <Button
                    className = "details-btn-container"
                    variant = "danger"
                    onClick = {betLoss}
                >Perdedora</Button>
                <Button
                    className = "details-btn-container"
                    variant = "warning"
                    onClick = {betPending}
                >Pendiente</Button>
                <Button
                    className = "details-btn-container"
                    variant = "outline-dark"
                >Editar</Button>
                <Link
                    className = "btn btn-dark btn-md details-btn-container"
                    to='/apuestas'
                >Atrás</Link>
            </div>
            {/* <div>
                <Button
                    variant = "dark"
                >Editar
                </Button>
            </div> */}
            <Modal  show={modal} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Apuesta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit = {saveBet}
                    >
                        <Form.Group onChange = {updateBetState}>
                            <Form.Label>Bookie:</Form.Label>
                            <Form.Control required name = "bookie" onChange = {updateBetState} value = {bookie}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Hipódromo:</Form.Label>
                            <Form.Control as = "select" required name = "racecourse" onChange = {updateBetState} value = {racecourse}>
                                {racecoursesArray.map(elm => (
                                    <option>{elm}</option>
                                ))}  
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Carrera:</Form.Label>
                            <Form.Control required name = "race" onChange = {updateBetState} value = {race}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Apuesta:</Form.Label>
                            <Form.Control required name = "betName" onChange = {updateBetState} value = {betName}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Stake:</Form.Label>
                            <Form.Control as = "select" required name = "stake" onChange = {updateBetState} value = {stake}>
                                {stakeArray.map(elm => (
                                        <option>{elm}</option>
                                    ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Cuota:</Form.Label>
                            <Form.Control required name = "price" onChange = {updateBetState} value = {price}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Código:</Form.Label>
                            <Form.Control as = "select" required name = "betCode" onChange = {updateBetState} value = {betCode}>
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
                            Editar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
        
    );
}
 
export default BetDetail;