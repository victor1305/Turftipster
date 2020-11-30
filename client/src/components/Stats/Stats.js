import React, { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';

import Stats2020 from './Years/Stats2020'
import Stats2019 from './Years/Stats2019'
import Stats2018 from './Years/Stats2018'
import Stats2017 from './Years/Stats2017'
import Stats2016 from './Years/Stats2016';

import horseImage from '../../images/horseStats.jpg'

const Stats = (props) => {

    const [ statsYear, updateYear ] = useState({})

    const changeYear2016 = () => {
        updateYear({
            statYear: 2016
        })
    }

    const changeYear2017 = () => {
        updateYear({
            statYear: 2017
        })
    }

    const changeYear2018 = () => {
        updateYear({
            statYear: 2018
        })
    }

    const changeYear2019 = () => {
        updateYear({
            statYear: 2019
        })
    }

    const changeYear2020 = () =>{
        updateYear({
            statYear: 2020
        })
    }

    const changeYear2021 = () => {
        updateYear({
            statYear: 2021
        })
    }
    
    return (

        <Fragment>
            {statsYear.statYear === 2020 &&
            <Stats2020 {...props}{...statsYear}/>
            }
            {statsYear.statYear === 2019 &&
            <Stats2019/>
            }
            {statsYear.statYear === 2018 &&
            <Stats2018/>
            }
            {statsYear.statYear === 2017 &&
            <Stats2017/>
            }
            {statsYear.statYear === 2016 &&
            <Stats2016/>
            }
            <h1 className = "stats-title">Selecciona un Año</h1>
            <div className = "stats-btn-container">
                <Button className = "btn-stats" onClick = {changeYear2016}>2016</Button>
                <Button className = "btn-stats" onClick = {changeYear2017}>2017</Button>
                <Button className = "btn-stats" onClick = {changeYear2018}>2018</Button>
                <Button className = "btn-stats" onClick = {changeYear2019}>2019</Button>
                <Button className = "btn-stats" onClick = {changeYear2020}>2020</Button>
                <Button className = "btn-stats" onClick = {changeYear2021}>2021</Button>
            </div>
            {!statsYear.statYear &&
            <div className = "stats-image-container">
                <img src = {horseImage} alt = "caballo-de-manos" className = "stats-image" />
            </div>
            }
        </Fragment>

    );
}
 
export default Stats;