import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap'
import BetService from '../../service/BetService'
import BetCard from './BetCard';
import BetModal from './BetModal';

const Bets = (props) => {

    const betservice = new BetService()

    const [ betList, loadBetList ] = useState([])

    const showBets = () => {

        betservice
            .getAllBets()
            .then(response => loadBetList(response.data))
            .catch(err => console.log(err))
    }

    return (
        
        <div className = "bets-buttons-container">
            <Button 
                variant="outline-info"
                onClick = {showBets} 
                className = "new-bet-btn"   
            >Cargar Apuestas</Button>
            <BetModal {...props}/>
            {betList &&
            <div className = "cards-container">
                <Row>
                    {betList.map(elm => <BetCard key = {elm._id} {...elm} />)}
                </Row>
            </div>}
        </div>
    );
}
 
export default Bets;