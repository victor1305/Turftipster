import React, { useState } from 'react';

import Stats2020 from './Years/Stats2020'
import Stats2019 from './Years/Stats2019'
import Stats2018 from './Years/Stats2018'
import Stats2017 from './Years/Stats2017'
import Stats2016 from './Years/Stats2016';
import StatsNextYears from './Years/StatsNextYears';

import horseImage from '../../images/horse-1165103_1920full.jpg'


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

        <div className = "stats-container">
            <h2 className = "stats-title">Nuestras Estadísticas</h2>
            <h6 className = "stats-subtitle">Ponemos a tu disposición nuestros números desde que empezamos a pronosticar publicamente en el año 2016.</h6>
            <h4 className = "stats-h4">Selecciona un Año</h4>
            <div className = "stats-btn-container">
                <button className = "stats-btn" onClick = {changeYear2016}><span>2016</span></button>
                <button className = "stats-btn" onClick = {changeYear2017}><span>2017</span></button>
                <button className = "stats-btn" onClick = {changeYear2018}><span>2018</span></button>
                <button className = "stats-btn" onClick = {changeYear2019}><span>2019</span></button>
                <button className = "stats-btn" onClick = {changeYear2020}><span>2020</span></button>
                <button className = "stats-btn" onClick = {changeYear2021}><span>2021</span></button>
            </div>
            <div className = "stats-table-container">
            {statsYear.statYear === 2021 &&
            <StatsNextYears {...props}{...statsYear}/>
            }
            {statsYear.statYear === 2020 &&
            <Stats2020/>
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
            </div>
            {!statsYear.statYear &&
            <div className = "stats-image-container">
                <img src = {horseImage} alt = "caballo-de-manos" className = "stats-image" />
            </div>
            }
        </div>

    );
}
 
export default Stats;