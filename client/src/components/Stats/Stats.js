import React, { useState, useEffect } from 'react';

import Stats2020 from './Years/Stats2020'
import Stats2019 from './Years/Stats2019'
import Stats2018 from './Years/Stats2018'
import Stats2017 from './Years/Stats2017'
import Stats2016 from './Years/Stats2016';
import StatsNextYears from './Years/StatsNextYears';
import StatsRaceCourses from './Years/StatsRaceCourses';
import StatsCategory from './Years/StatsCategory'
import StatsStakes from './Years/StatsStakes'

import horseImage from '../../images/horse-1165103_1920full.jpg'
import AOS from "aos";
import "aos/dist/aos.css"



const Stats = (props) => {

    const [ statsYear, updateYear ] = useState({})

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    const changeYear = (e) => {

        updateYear({
            statYear: parseInt(e.target.value)
        })
    }

    const changeType = (e) => {

        e.preventDefault()
        updateYear({
            statYear: statsYear.statYear,
            statType: e.target.value
        })

    }

    let today = new Date()
    let todayms = Date.parse(today)

    let button2021 = "2021-01-01T00:00:00.951+00:00"
    let button2021ms = Date.parse(button2021)
    
    return (

        <div className = "stats-container">
            <h2 className = "stats-title">Nuestras Estadísticas</h2>
            <h6 className = "stats-subtitle">Ponemos a tu disposición nuestros números desde que empezamos a pronosticar publicamente en el año 2016.</h6>
            <h4 className = "stats-h4">Selecciona un Año</h4>
            <div className = "stats-btn-container">
                <button className = "stats-btn" value = "2016" onClick = {changeYear}>2016</button>
                <button className = "stats-btn" value = "2017" onClick = {changeYear}>2017</button>
                <button className = "stats-btn" value = "2018" onClick = {changeYear}>2018</button>
                <button className = "stats-btn" value = "2019" onClick = {changeYear}>2019</button>
                <button className = "stats-btn" value = "2020" onClick = {changeYear}>2020</button>
                {todayms > button2021ms &&
                <button className = "stats-btn" value = "2021" onClick = {changeYear}>2021</button>
                }
            </div>
            {statsYear.statYear >= 2021 &&
            <div className = "stats-btn-container">
                <button className = "stats-type-btn" value = "months" onClick = {changeType}>Meses</button>
                <button className = "stats-type-btn" value = "racecourses" onClick = {changeType}>Hipódromos</button>
                <button className = "stats-type-btn" value = "category" onClick = {changeType}>Categorías</button>
                <button className = "stats-type-btn" value = "stakes" onClick = {changeType}>Stakes</button>
            </div>
            }
            <div className = "stats-table-container">
            {((statsYear.statYear >= 2021 && !statsYear.statType) || (statsYear.statYear >= 2021 && statsYear.statType === "months"))&&
            <div data-aos="fade-right" data-aos-duration="1500" >
                <StatsNextYears {...props}{...statsYear}/>
            </div>
            }
            {(statsYear.statYear >= 2021 && statsYear.statType === "racecourses")&&
            <div data-aos="fade-right" data-aos-duration="1500" >
                <StatsRaceCourses {...props}{...statsYear}/>
            </div>
            }
            {(statsYear.statYear >= 2021 && statsYear.statType === "category")&&
            <div data-aos="fade-right" data-aos-duration="1500" >
                <StatsCategory {...props}{...statsYear}/>
            </div>
            }
            {(statsYear.statYear >= 2021 && statsYear.statType === "stakes")&&
            <div data-aos="fade-right" data-aos-duration="1500" >
                <StatsStakes {...props}{...statsYear}/>
            </div>
            }
            {statsYear.statYear === 2020 &&
            <div data-aos="fade-right" data-aos-duration="1500" >
                <Stats2020/>
            </div>
            }
            {statsYear.statYear === 2019 &&
            <div data-aos="fade-right" data-aos-duration="1500" >
                <Stats2019/>
            </div>
            }
            {statsYear.statYear === 2018 &&
            <div data-aos="fade-right" data-aos-duration="1500" >
                <Stats2018/>
            </div>
            }
            {statsYear.statYear === 2017 &&
            <div data-aos="fade-right" data-aos-duration="1500" >
                <Stats2017/>
            </div>
            }
            {statsYear.statYear === 2016 &&
            <div data-aos="fade-right" data-aos-duration="1500" >
                <Stats2016/>
            </div>
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