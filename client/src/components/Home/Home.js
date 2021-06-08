import React, { useState, useEffect } from 'react';

import { Row } from 'react-bootstrap'
import BetService from '../../service/BetService'
import BetCard from '../Bets/BetCard'

import { css } from "@emotion/core";
import DotLoader from "react-spinners/DotLoader";

import homeImage from '../../images/horse-home.jpg'

import img2016 from '../../images/2016.png'
import img2017 from '../../images/2017.png'
import img2018 from '../../images/2018.png'
import img2019 from '../../images/2019.png'
import img2020 from '../../images/2020.png'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Home = (props) => {

    const betservice = new BetService()

    const [ betList, loadBetList ] = useState([])

    const [ spinner, updateSpinner ] = useState(true)

    useEffect(() => {

        console.log('Hola')

        betservice
            .getHomeBets()
            .then(response => {
                loadBetList(response.data)
                updateSpinner(false)
            })
            .catch(err => console.log(err))
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className = "home-image-container">
                <div className = "home-stats-container">
                    
                    <img className = "img-stats" src = {img2016} alt = "2016" />
                
                
                    <img className = "img-stats" src = {img2017} alt = "2017" />
                
                
                    <img className = "img-stats" src = {img2018} alt = "2018" />
                
                
                    <img className = "img-stats" src = {img2019} alt = "2019" />
                
                
                    <img className = "img-stats" src = {img2020} alt = "2020" />
                
                </div>
                <img className = "home-image" src = {homeImage} alt = "imagen-principal"/>

            </div>
                
            <article className = "home-article">
                <h2 className = "home-last-bets">Últimas Apuestas</h2>
                {spinner ?
                    <div className="sweet-loading spinner spinner-container">
                        <DotLoader
                            css={override}
                             height={50}
                             width={7}
                            size = {60}
                            color={"#38A700"}
                            loading={spinner}
                        />
                    </div>
                :
                    <div className = "cards-container">
                        <Row className = "justify-content-center">
                            {betList.map(elm => <BetCard key = {elm._id} {...elm} {...props}/>)}
                        </Row>
                    </div>
                }
            </article>
        </div>
    );
}
 
export default Home;