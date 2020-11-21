import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import BetService from '../../service/BetService'
import BetModal from './BetModal';

const BetDetail = (props) => {

    const id = props.match.params.id
    const betservice = new BetService()

    const [ betDetail, loadBetDetail ] = useState({})

    useEffect(() => {
        
        if(id) {
            betservice
            .getOneBet(id)
            .then(response => loadBetDetail(response.data))
            .catch(err => console.log(err))
        }
    }, [id])

    const { date, status, bookie, racecourse, race, betName, stake, price, profit, betCode, position } = betDetail

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

    let statusClient = ""
    let statusClass = ""

    if (status === "win") {
        statusClient = "Ganada"
        statusClass = "detail-status-win"
    }
    if (status === "loss") {
        statusClient = "Perdida"
        statusClass = "detail-status-loss"
    }
    if (status === "void") {
        statusClient = "Nula"
        statusClass = "detail-status-void"
    }
    if (status === "pending") {
        statusClient = "Pendiente"
        statusClass = "detail-status-pending"
    }

    let dateFormated = ""

    if (date) {
        dateFormated = new Date(date).toLocaleDateString()
    } 

    
    return (
        
        <div className = "bet-detail-container">
            <h1 className = "detail-title">Detalle de apuesta</h1>

            <p><strong>Bookie</strong>: {bookie}</p>
            <p><strong>Hipódromo: </strong>{racecourse}</p>
            <p><strong>Carrera: </strong>{race}</p>
            <p><strong>Apuesta: </strong>{betName}</p>
            <p><strong>Cuota: </strong>{price}</p>
            <p><strong>Stake: </strong>{stake}</p>   
            <p><strong>Resultado: </strong>{position}</p>
            <p><strong>Beneficio: </strong>{profit} Uds</p>
            <p><strong>Fecha: </strong>{dateFormated}</p>
            <p><strong>Código: </strong>{betCode}</p> 
            <p className = {statusClass}>{statusClient}</p>        
            <div >
                <Button
                    variant = "success"
                    className = "details-btn-container-win"
                    onClick = {betWin}
                >Ganada</Button>
                <Button
                    className = "details-btn-container"
                    variant = "primary"
                    onClick = {betVoid}
                >Nula</Button>
                <Button
                    className = "details-btn-container"
                    variant = "danger"
                    onClick = {betLoss}
                >Perdida</Button>
                <Button
                    className = "details-btn-container"
                    variant = "warning"
                    onClick = {betPending}
                >Pendiente</Button>
                
            </div>
            <div className = "details-edit-btn">
                <Link
                    className = "btn btn-dark btn-md details-btn-container mr-3"
                    to='/apuestas'
                >Atrás</Link>
                <BetModal {...betDetail} {...props}/>
            </div>
        </div>
        
    );
}
 
export default BetDetail;