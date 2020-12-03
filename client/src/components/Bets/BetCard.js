import React from 'react';

import { Link } from 'react-router-dom'

const BetCard = ({ _id, status, bookie, racecourse, race, betName, stake, price, profit, loggedInUser }) => {

    let betstate = ""

    if (status === "pending") {
        betstate = "card-p-pending"
    }
    if (status === "win") {
        betstate = "card-p-win"
    }
    if (status === "loss") {
        betstate = "card-p-loss"
    }
    if (status === "void") {
        betstate = "card-p-void"
    }


    return (
        
        <div className = "card">
            <h4 className = "card-title"><strong>{bookie}</strong></h4>
            <p className = "card-p"><strong>Pick:</strong></p>
            <p className = "card-p">{betName}</p>
            <p className = "card-p"><strong>Stake: </strong>{stake}</p>
            <p className = "card-p"><strong>Cuota: </strong>{price}</p>
            <p className = {betstate}><strong className = "card-strong">Ganancia: </strong>{profit.toFixed(2)} Uds</p>            
            <div>
            <Link to={`/detalle-apuesta/${_id}`} className = "card-a"><button className = "card-btn">Detalles</button></Link>     
            </div>
        </div>
        
    );
}
 
export default BetCard;