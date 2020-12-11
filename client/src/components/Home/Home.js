import React, { useState, useEffect } from 'react';

import { Row } from 'react-bootstrap'
import BetService from '../../service/BetService'
import BetCard from '../Bets/BetCard'

import { css } from "@emotion/core";
import DotLoader from "react-spinners/DotLoader";
import homeImage from '../../images/turfHome.jpg'

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