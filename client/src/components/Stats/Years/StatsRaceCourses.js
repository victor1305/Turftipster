import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap'
import BetService from '../../../service/BetService'

import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const StatsRaceCourses = (props) => {

    const betservice = new BetService()

    const [ betList, loadBetList ] = useState([])

    const [ racecourse, updateRacecourse ] = useState({})

    const [ spinner, updateSpinner ] = useState(true)

    const racecoursesList = [
      'Aix Les Bains',
      'Amiens',
      'Angers',
      'Argentan',
      'Auteil',
      'Bordeaux le Bouscat',
      'Cagnes Sur Mer',
      'Chantilly',
      'Chateaubriant',
      'Cholet',
      'Clairefontaine',
      'Compiegne',
      'Craon',
      'Dax',
      'Deauville',
      'Delta Downs',
      'Dieppe',
      'Dos Hermanas',
      'Evreux',
      'Fontainebleau',
      'Gulfstream Park',
      'La Teste de Buch',
      'Le Croise Laroche',
      "Le Lion d'Angers",
      'Le Mans',
      'Le Touquet',
      "Les Sables D'Olonne",
      'Longchamp',
      'Lyon La Soie',
      'Lyon Parilly',
      'Machecoul',
      'Marseille Borely',
      'Marseille Vivaux',
      'Meydan',
      'Mont de Marsan',
      'Moulins',
      'Nancy',
      'Nantes',
      'Pau',
      'Pineda',
      'Pornichet',
      'Saint Cloud',
      'Saint Malo',
      'Salon de Provence',
      'San Sebastián',
      'Sanlucar',
      'Senonnes-Pouance',
      'Strasbourg',
      'Tampa Bay',
      'Tarbes',
      'Toulouse',
      'Vichy',
      'Vittel',
      'Will Rogers Downs',
      'Zarzuela'
  ]
    const loopArray = []
    const racecoursesTotalArray = Object.values(racecourse)
    const racecoursesArray = racecoursesTotalArray.filter(elm => (elm.bets > 0))
    racecoursesArray.sort((a, b) => b.profitUds - a.profitUds)

    useEffect(() => {

        loadData()       

    // eslint-disable-next-line
    }, [props])

    useEffect(() => {

        updateValues()    
        
        setTimeout(() => {
            updateSpinner(false)  
        }, 3000)

    // eslint-disable-next-line
    }, [betList])


    const loadData = () => {

        betservice
            .getBetsYear(props.statYear)
            .then(response => (
                loadBetList(response.data)
                
            ))
            .catch(err => console.log(err))

    }

    const updateValues = () => {

      for(let i = 0; i < racecoursesList.length; i++) {

        const arrayTotal = betList.filter(elm => (elm.racecourse === racecoursesList[i]))
        const arrayWin = betList.filter(elm => (elm.racecourse === racecoursesList[i]) && (elm.status === "win"))
        const arrayLoss = betList.filter(elm => (elm.racecourse === racecoursesList[i]) && (elm.status === "loss"))
        const arrayVoid = betList.filter(elm => (elm.racecourse === racecoursesList[i]) && (elm.status === "void"))
        const arrayStake = arrayTotal.reduce((acc, elm) => {
          return acc + elm.stake},0)
        const arrayProfit = arrayTotal.reduce((acc, elm) => {
          return acc + elm.profit},0)

        const obj = {
            bets: arrayTotal.length,
            wins: arrayWin.length,
            loss: arrayLoss.length,
            void: arrayVoid.length,
            percent: ((arrayWin.length / (arrayLoss.length + arrayWin.length)) * 100).toFixed(2),
            averageStake: (arrayStake / arrayTotal.length).toFixed(2),
            totalUds: arrayStake.toFixed(2),
            profitUds: arrayProfit.toFixed(2),
            yield: ((arrayProfit * 100) / arrayStake).toFixed(2),
            racecourse: racecoursesList[i]          
          }

        loopArray.push(obj)

      }

      updateRacecourse(loopArray)

    }
    
    return (
        <>
            <h2 className = "stats-title" id= "title">Stats {props.statYear} por Hipódromo</h2>
            <div className = "table-stats-container">
            {spinner ?
                <div className="sweet-loading spinner spinner-container">
                    <DotLoader
                        css={override}
                            height={60}
                            width={8}
                        size = {80}
                        color={"#38A700"}
                        loading={spinner}
                    />
                </div>
            :
                <Table striped bordered hover variant="dark" size = "sm" className = "table" responsive = "md">    
                    <thead>
                        <tr>
                        <th>Hipódromo</th>
                        <th>Apuestas</th>
                        <th>Aciertos</th>
                        <th>Fallos</th>
                        <th>Nulos</th>
                        <th>% Acierto</th>
                        <th>Stake Medio</th>
                        <th>Uds Jugadas</th>
                        <th>Yield</th>
                        <th>Uds Ganadas</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {racecoursesArray.map((item => (
                        <tr key = {item.racecourse}>
                            <td>{item.racecourse}</td>
                            <td>{item.bets}</td>
                            <td>{item.wins}</td>
                            <td>{item.loss}</td>
                            <td>{item.void}</td>
                            <td>{item.percent !== "NaN" ? `${item.percent}%` : "Sin datos"}</td>
                            <td>{item.averageStake === "NaN" ? "Sin Datos" : item.averageStake}</td>
                            <td>{item.totalUds}</td>
                            <td className = {item.yield >= 0 ? "stats-green" : item.yield < 0 ? "stats-red" : ""}>{item.yield !== "NaN" ? `${item.yield}%` : "Sin datos"}</td>
                            <td className = {item.profitUds >= 0 ? "stats-green" : "stats-red"}>{item.profitUds}</td>
                        </tr>
                        )))}
                    </tbody>
                    
                </Table>
            }
            </div>
        </>
    );
}
 
export default StatsRaceCourses;