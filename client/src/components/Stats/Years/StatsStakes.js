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

const StatsStakes = (props) => {
    
    const betservice = new BetService()

    const [ betList, loadBetList ] = useState([])

    const [ stakes, updateStake ] = useState({})

    const [ spinner, updateSpinner ] = useState(true)

    const stakesTotalArray = Object.values(stakes)
    const stakesArray = stakesTotalArray.filter(elm => (elm.bets > 0))

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

        //-----------------------STAKES ARRAYS----------------------------------------

        const stake005Array = betList.filter(elm => (elm.stake === 0.05))
        const stake01Array = betList.filter(elm => (elm.stake === 0.1))
        const stake015Array = betList.filter(elm => (elm.stake === 0.15))
        const stake02Array = betList.filter(elm => (elm.stake === 0.2))
        const stake025Array = betList.filter(elm => (elm.stake === 0.25))
        const stake03Array = betList.filter(elm => (elm.stake === 0.3))
        const stake04Array = betList.filter(elm => (elm.stake === 0.4))
        const stake05Array = betList.filter(elm => (elm.stake === 0.5))
        const stake075Array = betList.filter(elm => (elm.stake === 0.75))
        const stake1Array = betList.filter(elm => (elm.stake === 1))
        const stake125Array = betList.filter(elm => (elm.stake === 1.25))
        const stake15Array = betList.filter(elm => (elm.stake === 1.5))
        const stake2Array = betList.filter(elm => (elm.stake === 2))
    
        //----------------------STAKES WIN ARRAYS----------------------------------------------

        const stake005ArrayWin = betList.filter(elm => (elm.stake === 0.05) && (elm.status === "win"))
        const stake01ArrayWin = betList.filter(elm => (elm.stake === 0.1) && (elm.status === "win"))
        const stake015ArrayWin = betList.filter(elm => (elm.stake === 0.15) && (elm.status === "win"))
        const stake02ArrayWin = betList.filter(elm => (elm.stake === 0.2) && (elm.status === "win"))
        const stake025ArrayWin = betList.filter(elm => (elm.stake === 0.25) && (elm.status === "win"))
        const stake03ArrayWin = betList.filter(elm => (elm.stake === 0.3) && (elm.status === "win"))
        const stake04ArrayWin = betList.filter(elm => (elm.stake === 0.4) && (elm.status === "win"))
        const stake05ArrayWin = betList.filter(elm => (elm.stake === 0.5) && (elm.status === "win"))
        const stake075ArrayWin = betList.filter(elm => (elm.stake === 0.75) && (elm.status === "win"))
        const stake1ArrayWin = betList.filter(elm => (elm.stake === 1) && (elm.status === "win"))
        const stake125ArrayWin = betList.filter(elm => (elm.stake === 1.25) && (elm.status === "win"))
        const stake15ArrayWin = betList.filter(elm => (elm.stake === 1.5) && (elm.status === "win"))
        const stake2ArrayWin = betList.filter(elm => (elm.stake === 2) && (elm.status === "win"))

        //----------------------STAKES LOSS ARRAYS----------------------------------------------

        const stake005ArrayLoss = betList.filter(elm => (elm.stake === 0.05) && (elm.status === "loss"))
        const stake01ArrayLoss = betList.filter(elm => (elm.stake === 0.1) && (elm.status === "loss"))
        const stake015ArrayLoss = betList.filter(elm => (elm.stake === 0.15) && (elm.status === "loss"))
        const stake02ArrayLoss = betList.filter(elm => (elm.stake === 0.2) && (elm.status === "loss"))
        const stake025ArrayLoss = betList.filter(elm => (elm.stake === 0.25) && (elm.status === "loss"))
        const stake03ArrayLoss = betList.filter(elm => (elm.stake === 0.3) && (elm.status === "loss"))
        const stake04ArrayLoss = betList.filter(elm => (elm.stake === 0.4) && (elm.status === "loss"))
        const stake05ArrayLoss = betList.filter(elm => (elm.stake === 0.5) && (elm.status === "loss"))
        const stake075ArrayLoss = betList.filter(elm => (elm.stake === 0.75) && (elm.status === "loss"))
        const stake1ArrayLoss = betList.filter(elm => (elm.stake === 1) && (elm.status === "loss"))
        const stake125ArrayLoss = betList.filter(elm => (elm.stake === 1.25) && (elm.status === "loss"))
        const stake15ArrayLoss = betList.filter(elm => (elm.stake === 1.5) && (elm.status === "loss"))
        const stake2ArrayLoss = betList.filter(elm => (elm.stake === 2) && (elm.status === "loss"))

        //----------------------STAKES VOID ARRAYS----------------------------------------------

        const stake005ArrayVoid = betList.filter(elm => (elm.stake === 0.05) && (elm.status === "void"))
        const stake01ArrayVoid = betList.filter(elm => (elm.stake === 0.1) && (elm.status === "void"))
        const stake015ArrayVoid = betList.filter(elm => (elm.stake === 0.15) && (elm.status === "void"))
        const stake02ArrayVoid = betList.filter(elm => (elm.stake === 0.2) && (elm.status === "void"))
        const stake025ArrayVoid = betList.filter(elm => (elm.stake === 0.25) && (elm.status === "void"))
        const stake03ArrayVoid = betList.filter(elm => (elm.stake === 0.3) && (elm.status === "void"))
        const stake04ArrayVoid = betList.filter(elm => (elm.stake === 0.4) && (elm.status === "void"))
        const stake05ArrayVoid = betList.filter(elm => (elm.stake === 0.5) && (elm.status === "void"))
        const stake075ArrayVoid = betList.filter(elm => (elm.stake === 0.75) && (elm.status === "void"))
        const stake1ArrayVoid = betList.filter(elm => (elm.stake === 1) && (elm.status === "void"))
        const stake125ArrayVoid = betList.filter(elm => (elm.stake === 1.25) && (elm.status === "void"))
        const stake15ArrayVoid = betList.filter(elm => (elm.stake === 1.5) && (elm.status === "void"))
        const stake2ArrayVoid = betList.filter(elm => (elm.stake === 2) && (elm.status === "void"))

        //---------------------STAKE----------------------------------------------------------

        const stake005ArrayStake = stake005Array.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const stake01ArrayStake = stake01Array.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const stake015ArrayStake = stake015Array.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const stake02ArrayStake = stake02Array.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const stake025ArrayStake = stake025Array.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const stake03ArrayStake = stake03Array.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const stake04ArrayStake = stake04Array.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const stake05ArrayStake = stake05Array.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const stake075ArrayStake = stake075Array.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const stake1ArrayStake = stake1Array.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const stake125ArrayStake = stake125Array.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const stake15ArrayStake = stake15Array.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const stake2ArrayStake = stake2Array.reduce((acc, elm) => {
            return acc + elm.stake},0)

        //---------------------PROFIT----------------------------------------------------------

        const stake005ArrayProfit = stake005Array.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const stake01ArrayProfit = stake01Array.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const stake015ArrayProfit = stake015Array.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const stake02ArrayProfit = stake02Array.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const stake025ArrayProfit = stake025Array.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const stake03ArrayProfit = stake03Array.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const stake04ArrayProfit = stake04Array.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const stake05ArrayProfit = stake05Array.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const stake075ArrayProfit = stake075Array.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const stake1ArrayProfit = stake1Array.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const stake125ArrayProfit = stake125Array.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const stake15ArrayProfit = stake15Array.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const stake2ArrayProfit = stake2Array.reduce((acc, elm) => {
            return acc + elm.profit},0)

        updateStake({
            stake005Obj : {
                bets: stake005Array.length,
                wins: stake005ArrayWin.length,
                loss: stake005ArrayLoss.length,
                void: stake005ArrayVoid.length,
                percent: ((stake005ArrayWin.length / (stake005ArrayLoss.length + stake005ArrayWin.length)) * 100).toFixed(2),
                averageStake: (stake005ArrayStake / stake005Array.length).toFixed(2),
                totalUds: stake005ArrayStake.toFixed(2),
                profitUds: stake005ArrayProfit.toFixed(2),
                yield: ((stake005ArrayProfit * 100) / stake005ArrayStake).toFixed(2),
                stake: 0.05
            },
            stake01Obj : {
                bets: stake01Array.length,
                wins: stake01ArrayWin.length,
                loss: stake01ArrayLoss.length,
                void: stake01ArrayVoid.length,
                percent: ((stake01ArrayWin.length / (stake01ArrayLoss.length + stake01ArrayWin.length)) * 100).toFixed(2),
                averageStake: (stake01ArrayStake / stake01Array.length).toFixed(2),
                totalUds: stake01ArrayStake.toFixed(2),
                profitUds: stake01ArrayProfit.toFixed(2),
                yield: ((stake01ArrayProfit * 100) / stake01ArrayStake).toFixed(2),
                stake: 0.1
            },
            stake015Obj : {
                bets: stake015Array.length,
                wins: stake015ArrayWin.length,
                loss: stake015ArrayLoss.length,
                void: stake015ArrayVoid.length,
                percent: ((stake015ArrayWin.length / (stake015ArrayLoss.length + stake015ArrayWin.length)) * 100).toFixed(2),
                averageStake: (stake015ArrayStake / stake015Array.length).toFixed(2),
                totalUds: stake015ArrayStake.toFixed(2),
                profitUds: stake015ArrayProfit.toFixed(2),
                yield: ((stake015ArrayProfit * 100) / stake015ArrayStake).toFixed(2),
                stake: 0.15
            },
            stake02Obj : {
                bets: stake02Array.length,
                wins: stake02ArrayWin.length,
                loss: stake02ArrayLoss.length,
                void: stake02ArrayVoid.length,
                percent: ((stake02ArrayWin.length / (stake02ArrayLoss.length + stake02ArrayWin.length)) * 100).toFixed(2),
                averageStake: (stake02ArrayStake / stake02Array.length).toFixed(2),
                totalUds: stake02ArrayStake.toFixed(2),
                profitUds: stake02ArrayProfit.toFixed(2),
                yield: ((stake02ArrayProfit * 100) / stake02ArrayStake).toFixed(2),
                stake: 0.2
            },
            stake025Obj : {
                bets: stake025Array.length,
                wins: stake025ArrayWin.length,
                loss: stake025ArrayLoss.length,
                void: stake025ArrayVoid.length,
                percent: ((stake025ArrayWin.length / (stake025ArrayLoss.length + stake025ArrayWin.length)) * 100).toFixed(2),
                averageStake: (stake025ArrayStake / stake025Array.length).toFixed(2),
                totalUds: stake025ArrayStake.toFixed(2),
                profitUds: stake025ArrayProfit.toFixed(2),
                yield: ((stake025ArrayProfit * 100) / stake025ArrayStake).toFixed(2),
                stake: 0.25
            },
            stake03Obj : {
                bets: stake03Array.length,
                wins: stake03ArrayWin.length,
                loss: stake03ArrayLoss.length,
                void: stake03ArrayVoid.length,
                percent: ((stake03ArrayWin.length / (stake03ArrayLoss.length + stake03ArrayWin.length)) * 100).toFixed(2),
                averageStake: (stake03ArrayStake / stake03Array.length).toFixed(2),
                totalUds: stake03ArrayStake.toFixed(2),
                profitUds: stake03ArrayProfit.toFixed(2),
                yield: ((stake03ArrayProfit * 100) / stake03ArrayStake).toFixed(2),
                stake: 0.3
            },
            stake04Obj : {
                bets: stake04Array.length,
                wins: stake04ArrayWin.length,
                loss: stake04ArrayLoss.length,
                void: stake04ArrayVoid.length,
                percent: ((stake04ArrayWin.length / (stake04ArrayLoss.length + stake04ArrayWin.length)) * 100).toFixed(2),
                averageStake: (stake04ArrayStake / stake04Array.length).toFixed(2),
                totalUds: stake04ArrayStake.toFixed(2),
                profitUds: stake04ArrayProfit.toFixed(2),
                yield: ((stake04ArrayProfit * 100) / stake04ArrayStake).toFixed(2),
                stake: 0.4
            },
            stake05Obj : {
                bets: stake05Array.length,
                wins: stake05ArrayWin.length,
                loss: stake05ArrayLoss.length,
                void: stake05ArrayVoid.length,
                percent: ((stake05ArrayWin.length / (stake05ArrayLoss.length + stake05ArrayWin.length)) * 100).toFixed(2),
                averageStake: (stake05ArrayStake / stake05Array.length).toFixed(2),
                totalUds: stake05ArrayStake.toFixed(2),
                profitUds: stake05ArrayProfit.toFixed(2),
                yield: ((stake05ArrayProfit * 100) / stake05ArrayStake).toFixed(2),
                stake: 0.5
            },
            stake075Obj : {
                bets: stake075Array.length,
                wins: stake075ArrayWin.length,
                loss: stake075ArrayLoss.length,
                void: stake075ArrayVoid.length,
                percent: ((stake075ArrayWin.length / (stake075ArrayLoss.length + stake075ArrayWin.length)) * 100).toFixed(2),
                averageStake: (stake075ArrayStake / stake075Array.length).toFixed(2),
                totalUds: stake075ArrayStake.toFixed(2),
                profitUds: stake075ArrayProfit.toFixed(2),
                yield: ((stake075ArrayProfit * 100) / stake075ArrayStake).toFixed(2),
                stake: 0.75
            },
            stake1Obj : {
                bets: stake1Array.length,
                wins: stake1ArrayWin.length,
                loss: stake1ArrayLoss.length,
                void: stake1ArrayVoid.length,
                percent: ((stake1ArrayWin.length / (stake1ArrayLoss.length + stake1ArrayWin.length)) * 100).toFixed(2),
                averageStake: (stake1ArrayStake / stake1Array.length).toFixed(2),
                totalUds: stake1ArrayStake.toFixed(2),
                profitUds: stake1ArrayProfit.toFixed(2),
                yield: ((stake1ArrayProfit * 100) / stake1ArrayStake).toFixed(2),
                stake: 1
            },
            stake125Obj : {
                bets: stake125Array.length,
                wins: stake125ArrayWin.length,
                loss: stake125ArrayLoss.length,
                void: stake125ArrayVoid.length,
                percent: ((stake125ArrayWin.length / (stake125ArrayLoss.length + stake125ArrayWin.length)) * 100).toFixed(2),
                averageStake: (stake125ArrayStake / stake125Array.length).toFixed(2),
                totalUds: stake125ArrayStake.toFixed(2),
                profitUds: stake125ArrayProfit.toFixed(2),
                yield: ((stake125ArrayProfit * 100) / stake125ArrayStake).toFixed(2),
                stake: 1.25
            },
            stake15Obj : {
                bets: stake15Array.length,
                wins: stake15ArrayWin.length,
                loss: stake15ArrayLoss.length,
                void: stake15ArrayVoid.length,
                percent: ((stake15ArrayWin.length / (stake15ArrayLoss.length + stake15ArrayWin.length)) * 100).toFixed(2),
                averageStake: (stake15ArrayStake / stake15Array.length).toFixed(2),
                totalUds: stake15ArrayStake.toFixed(2),
                profitUds: stake15ArrayProfit.toFixed(2),
                yield: ((stake15ArrayProfit * 100) / stake15ArrayStake).toFixed(2),
                stake: 1.5
            },
            stake2Obj : {
                bets: stake2Array.length,
                wins: stake2ArrayWin.length,
                loss: stake2ArrayLoss.length,
                void: stake2ArrayVoid.length,
                percent: ((stake2ArrayWin.length / (stake2ArrayLoss.length + stake2ArrayWin.length)) * 100).toFixed(2),
                averageStake: (stake2ArrayStake / stake2Array.length).toFixed(2),
                totalUds: stake2ArrayStake.toFixed(2),
                profitUds: stake2ArrayProfit.toFixed(2),
                yield: ((stake2ArrayProfit * 100) / stake2ArrayStake).toFixed(2),
                stake: 2
            },
        })
    }
    
    return (
        <>
            <h2 className = "stats-title" id= "title">Stats {props.statYear} por Stake</h2>
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
                        <th>Stake</th>
                        <th>Apuestas</th>
                        <th>Aciertos</th>
                        <th>Fallos</th>
                        <th>Nulos</th>
                        <th>% Acierto</th>
                        <th>Uds Jugadas</th>
                        <th>Yield</th>
                        <th>Uds Ganadas</th>
                        </tr>
                    </thead>
                    
                    <tbody >
                        {stakesArray.map((item => (
                        <tr key = {item.stake}>
                            <td>{item.stake}</td>
                            <td>{item.bets}</td>
                            <td>{item.wins}</td>
                            <td>{item.loss}</td>
                            <td>{item.void}</td>
                            <td>{item.percent !== "NaN" ? `${item.percent}%` : "Sin datos"}</td>
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
 
export default StatsStakes;