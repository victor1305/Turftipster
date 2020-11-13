import React from 'react';

import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const BetCard = ({ _id, status, bookie, racecourse, race, betName, stake, price, profit, match }) => {

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
        
            <Card
                bg = {bgCard}
                text = {textCard}
                className = "mb-4 mr-4"
                style={{ width: '15rem' }}
            >
                <Card.Body>
                    <Card.Title>
                        <strong>{bookie}</strong>
                    </Card.Title>
                    <Card.Text><strong>{racecourse}</strong></Card.Text>
                    <Card.Text><strong>Carrera: </strong>{race}</Card.Text>
                    <Card.Text><strong>{betName}</strong></Card.Text>
                    <Card.Text><strong>Stake: </strong>{stake}</Card.Text>
                    <Card.Text><strong>Cuota: </strong>{price}</Card.Text>
                    <Card.Text><strong>Ganancia: </strong>{profit} Uds</Card.Text>
                    {match.path.includes("apuestas") &&
                    <Link to={`/detalle-apuesta/${_id}`} className="btn btn-dark btn-block btn-sm">Detalles</Link>
                    }
                </Card.Body>
            </Card>
        
    );
}
 
export default BetCard;