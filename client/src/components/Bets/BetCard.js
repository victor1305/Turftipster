import React from 'react';

import { Link } from 'react-router-dom'
import { Card, Col } from 'react-bootstrap'

const BetCard = ({ _id, status, bookie, racecourse, race, betName, stake, price, profit }) => {

    let bgCard = ""
    let textCard = ""

    if (status === "pending") {
        bgCard = "warning"
        textCard = "dark"
    }
    if (status === "win") {
        bgCard = "success"
        textCard = "dark"
    }
    if (status === "loss") {
        bgCard = "danger"
        textCard = "white"
    }
    if (status === "void") {
        bgCard = "primary"
        textCard = "white"
    }


    return (
        <Col md = {2}>
            <Card
                bg = {bgCard}
                text = {textCard}
            >
                <Card.Body>
                    <Card.Title>
                        <strong>{bookie}</strong>
                    </Card.Title>
                    <Card.Text><strong>Hipódromo: </strong>{racecourse}</Card.Text>
                    <Card.Text><strong>Carrera: </strong>{race}</Card.Text>
                    <Card.Text>{betName}</Card.Text>
                    <Card.Text><strong>Stake: </strong>{stake}</Card.Text>
                    <Card.Text><strong>Cuota: </strong>{price}</Card.Text>
                    <Card.Text><strong>Resultado: </strong></Card.Text>
                    <Card.Text><strong>Ganancia: </strong>{profit} Uds</Card.Text>
                    <Link to={`/detalle-apuesta/${_id}`} className="btn btn-dark btn-block btn-sm">Detalles de Apuesta</Link>
                </Card.Body>
            </Card>
        </Col>
    );
}
 
export default BetCard;