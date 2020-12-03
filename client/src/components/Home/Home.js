import React, { useState, useEffect } from 'react';

import { Row } from 'react-bootstrap'
import BetService from '../../service/BetService'
import BetCard from '../Bets/BetCard'

import homeImage from '../../images/turfHome.jpg'

const Home = (props) => {

    const betservice = new BetService()

    const [ betList, loadBetList ] = useState([])

    useEffect(() => {

        betservice
            .getHomeBets()
            .then(response => loadBetList(response.data))
            .catch(err => console.log(err))
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className = "home-image-container">
                <img className = "home-image" src = {homeImage} alt = "imagen-principal"/>
            </div>
            <article className = "home-article">
                <h2 className = "home-last-bets">Últimas Apuestas</h2>
                {betList &&
                    <div className = "cards-container">
                        <Row className = "justify-content-center">
                            {betList.map(elm => <BetCard key = {elm._id} {...elm} {...props}/>)}
                        </Row>
                    </div>}
            </article>
        </div>
    );
}
 
export default Home;