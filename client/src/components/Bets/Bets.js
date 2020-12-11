import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap'
import BetService from '../../service/BetService'
import BetCard from './BetCard';
import BetModal from './BetModal';


const Bets = (props) => {

    const betservice = new BetService()

    const [ betList, loadBetList ] = useState([])
    const [ totalBet, loadTotalBetList ] = useState(0)
    // eslint-disable-next-line
    const [limit, setLimit] = useState(42);
    const [skip, setSkip] = useState(0);

    const nextPage = () => {
        setSkip(skip + limit)
    }

    const previousPage = () => {
        setSkip(skip - limit)
    }

    useEffect(() => {
        fetchUsers(limit, skip)
        // eslint-disable-next-line
    }, [skip, limit, totalBet])

    useEffect(() => {
        loadBets()
        // eslint-disable-next-line
    }, [props])

    const loadBets = () => {

        betservice
            .getNumberBets()
            .then(res => loadTotalBetList(res.data))
            .catch(err => console.log(err))
    }

    const fetchUsers = (limit, skip) => {

        betservice
            .getAllBets(limit, skip)
            .then(response => loadBetList(response.data))
            .catch((err) => console.log(err))
    }

    const page = skip/limit

    let totalPage = 0

    if (totalBet % limit === 0) {
        totalPage = (totalBet / limit) -1
    
    } else {
        totalPage = Math.floor(totalBet / limit)
    }
    

    return (
        
        <div className = "bets-buttons-container">
            <BetModal {...props}/>
            
            {betList &&
            <div className = "cards-container">
                {props.loggedInUser &&
                <Row className = "justify-content-center">
                    {betList.map(elm => <BetCard key = {elm._id} {...elm} {...props}/>)}
                </Row>
                }
            </div>
            }
            {props.loggedInUser &&
            <div className = "bet-pages-container"> 
                {page > 0 &&
                <button onClick={previousPage} className = "previous-page"/>
                }
                {totalPage > 0 &&
                <span>Página {page} de {totalPage}</span>
                }
                {page < totalPage &&
                <button onClick={nextPage} className = "next-page"/> 
                }
            </div>
            }
        </div>
    );
}
 
export default Bets;