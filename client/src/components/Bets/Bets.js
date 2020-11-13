import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap'
import BetService from '../../service/BetService'
import BetCard from './BetCard';
import BetModal from './BetModal';

const Bets = (props) => {

    const betservice = new BetService()

    const [ betList, loadBetList ] = useState([])

    useEffect(() => {

        betservice
            .getAllBets()
            .then(response => loadBetList(response.data))
            .catch(err => console.log(err))
    
    }, [])

    return (
        
        <div className = "bets-buttons-container">
            <BetModal {...props}/>
            
            {betList &&
            <div className = "cards-container">
                <Row className = "justify-content-center">
                    {betList.map(elm => <BetCard key = {elm._id} {...elm} {...props}/>)}
                </Row>
            </div>}
        </div>
    );
}
 
export default Bets;