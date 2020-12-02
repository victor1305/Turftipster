import React, { useState, useEffect } from 'react';

import { Row } from 'react-bootstrap'
import BetService from '../../service/BetService'
import BetCard from '../Bets/BetCard'

import homeImage from '../../images/horse-1394093_1920.jpg'

const Home = (props) => {

    const betservice = new BetService()

    const [ betList, loadBetList ] = useState([])

    useEffect(() => {

        betservice
            .getHomeBets()
            .then(response => loadBetList(response.data))
            .catch(err => console.log(err))
    
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
                {/* <h3 className = "home-btn"><a className = "home-join-us-a" href = "#Telegram">Únete en Telegram</a></h3> */}
                {/* <div className = "home-btn-container">
                    <a href = "https://telegram.me/turftipster"><button className = "home-btn"><span>Únete en Telegram</span></button></a>
                </div> */}
            </article>
        </div>
    );
}
 
export default Home;