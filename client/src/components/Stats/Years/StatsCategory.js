import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap'
import BetService from '../../../service/BetService'


const StatsCategory = (props) => {
    
    const betservice = new BetService()

    const [ betList, loadBetList ] = useState([])

    const [ category, updateCategory ] = useState({})

    const categoryTotalArray = Object.values(category)
    const categoryArray = categoryTotalArray.filter(elm => (elm.bets > 0))

    useEffect(() => {

        loadData()       

    // eslint-disable-next-line
    }, [props])

    useEffect(() => {

        updateValues()       

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

        //-----------------------CATEGORY ARRAYS----------------------------------------

        const pf2aArray = betList.filter(elm => (elm.betCode === "PF 2A"))
        const pf3aArray = betList.filter(elm => (elm.betCode === "PF 3A"))
        const pfVjosArray = betList.filter(elm => (elm.betCode === "PF VJOS"))
        const pfMixArray = betList.filter(elm => (elm.betCode === "PF MIX"))
        const rec2aArray = betList.filter(elm => (elm.betCode === "REC 2A"))
        const rec3aArray = betList.filter(elm => (elm.betCode === "REC 3A"))
        const recVjosArray = betList.filter(elm => (elm.betCode === "REC VJOS"))
        const recMixArray = betList.filter(elm => (elm.betCode === "REC MIX"))
        const hdcp2aArray = betList.filter(elm => (elm.betCode === "HDCP 2A"))
        const hdcp3aArray = betList.filter(elm => (elm.betCode === "HDCP 3A"))
        const hdcpVjosArray = betList.filter(elm => (elm.betCode === "HDCP VJOS"))
        const hdcpMixArray = betList.filter(elm => (elm.betCode === "HDCP MIX"))
        const combiArray = betList.filter(elm => (elm.betCode === "COMBI"))

        //---------------------CATEGORY WIN ARRAYS-----------------------------------------------

        const pf2aArrayWin = betList.filter(elm => (elm.betCode === "PF 2A") && (elm.status === "win"))
        const pf3aArrayWin = betList.filter(elm => (elm.betCode === "PF 3A") && (elm.status === "win"))
        const pfVjosArrayWin = betList.filter(elm => (elm.betCode === "PF VJOS") && (elm.status === "win"))
        const pfMixArrayWin = betList.filter(elm => (elm.betCode === "PF MIX") && (elm.status === "win"))
        const rec2aArrayWin = betList.filter(elm => (elm.betCode === "REC 2A") && (elm.status === "win"))
        const rec3aArrayWin = betList.filter(elm => (elm.betCode === "REC 3A") && (elm.status === "win"))
        const recVjosArrayWin = betList.filter(elm => (elm.betCode === "REC VJOS") && (elm.status === "win"))
        const recMixArrayWin = betList.filter(elm => (elm.betCode === "REC MIX") && (elm.status === "win"))
        const hdcp2aArrayWin = betList.filter(elm => (elm.betCode === "HDCP 2A") && (elm.status === "win"))
        const hdcp3aArrayWin = betList.filter(elm => (elm.betCode === "HDCP 3A") && (elm.status === "win"))
        const hdcpVjosArrayWin = betList.filter(elm => (elm.betCode === "HDCP VJOS") && (elm.status === "win"))
        const hdcpMixArrayWin = betList.filter(elm => (elm.betCode === "HDCP MIX") && (elm.status === "win"))
        const combiArrayWin = betList.filter(elm => (elm.betCode === "COMBI") && (elm.status === "win"))

        //---------------------CATEGORY LOSS ARRAYS-----------------------------------------------

        const pf2aArrayLoss = betList.filter(elm => (elm.betCode === "PF 2A") && (elm.status === "loss"))
        const pf3aArrayLoss = betList.filter(elm => (elm.betCode === "PF 3A") && (elm.status === "loss"))
        const pfVjosArrayLoss = betList.filter(elm => (elm.betCode === "PF VJOS") && (elm.status === "loss"))
        const pfMixArrayLoss = betList.filter(elm => (elm.betCode === "PF MIX") && (elm.status === "loss"))
        const rec2aArrayLoss = betList.filter(elm => (elm.betCode === "REC 2A") && (elm.status === "loss"))
        const rec3aArrayLoss = betList.filter(elm => (elm.betCode === "REC 3A") && (elm.status === "loss"))
        const recVjosArrayLoss = betList.filter(elm => (elm.betCode === "REC VJOS") && (elm.status === "loss"))
        const recMixArrayLoss = betList.filter(elm => (elm.betCode === "REC MIX") && (elm.status === "loss"))
        const hdcp2aArrayLoss = betList.filter(elm => (elm.betCode === "HDCP 2A") && (elm.status === "loss"))
        const hdcp3aArrayLoss = betList.filter(elm => (elm.betCode === "HDCP 3A") && (elm.status === "loss"))
        const hdcpVjosArrayLoss = betList.filter(elm => (elm.betCode === "HDCP VJOS") && (elm.status === "loss"))
        const hdcpMixArrayLoss = betList.filter(elm => (elm.betCode === "HDCP MIX") && (elm.status === "loss"))
        const combiArrayLoss = betList.filter(elm => (elm.betCode === "COMBI") && (elm.status === "loss"))

        //---------------------CATEGORY VOID ARRAYS-----------------------------------------------

        const pf2aArrayVoid = betList.filter(elm => (elm.betCode === "PF 2A") && (elm.status === "void"))
        const pf3aArrayVoid = betList.filter(elm => (elm.betCode === "PF 3A") && (elm.status === "void"))
        const pfVjosArrayVoid = betList.filter(elm => (elm.betCode === "PF VJOS") && (elm.status === "void"))
        const pfMixArrayVoid = betList.filter(elm => (elm.betCode === "PF MIX") && (elm.status === "void"))
        const rec2aArrayVoid = betList.filter(elm => (elm.betCode === "REC 2A") && (elm.status === "void"))
        const rec3aArrayVoid = betList.filter(elm => (elm.betCode === "REC 3A") && (elm.status === "void"))
        const recVjosArrayVoid = betList.filter(elm => (elm.betCode === "REC VJOS") && (elm.status === "void"))
        const recMixArrayVoid = betList.filter(elm => (elm.betCode === "REC MIX") && (elm.status === "void"))
        const hdcp2aArrayVoid = betList.filter(elm => (elm.betCode === "HDCP 2A") && (elm.status === "void"))
        const hdcp3aArrayVoid = betList.filter(elm => (elm.betCode === "HDCP 3A") && (elm.status === "void"))
        const hdcpVjosArrayVoid = betList.filter(elm => (elm.betCode === "HDCP VJOS") && (elm.status === "void"))
        const hdcpMixArrayVoid = betList.filter(elm => (elm.betCode === "HDCP MIX") && (elm.status === "void"))
        const combiArrayVoid = betList.filter(elm => (elm.betCode === "COMBI") && (elm.status === "void"))

        //---------------------STAKE----------------------------------------------------------

        const pf2aArrayStake = pf2aArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const pf3aArrayStake = pf3aArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const pfVjosArrayStake = pfVjosArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const pfMixArrayStake = pfMixArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const rec2aArrayStake = rec2aArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const rec3aArrayStake = rec3aArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const recVjosArrayStake = recVjosArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const recMixArrayStake = recMixArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const hdcp2aArrayStake = hdcp2aArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const hdcp3aArrayStake = hdcp3aArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const hdcpVjosArrayStake = hdcpVjosArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const hdcpMixArrayStake = hdcpMixArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const combiArrayStake = combiArray.reduce((acc, elm) => {
            return acc + elm.stake},0)

        //---------------------PROFIT----------------------------------------------------------

        const pf2aArrayProfit = pf2aArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const pf3aArrayProfit = pf3aArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const pfVjosArrayProfit = pfVjosArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const pfMixArrayProfit = pfMixArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const rec2aArrayProfit = rec2aArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const rec3aArrayProfit = rec3aArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const recVjosArrayProfit = recVjosArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const recMixArrayProfit = recMixArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const hdcp2aArrayProfit = hdcp2aArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const hdcp3aArrayProfit = hdcp3aArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const hdcpVjosArrayProfit = hdcpVjosArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const hdcpMixArrayProfit = hdcpMixArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const combiArrayProfit = combiArray.reduce((acc, elm) => {
            return acc + elm.profit},0)

        updateCategory({
            pf2aObj : {
                bets: pf2aArray.length,
                wins: pf2aArrayWin.length,
                loss: pf2aArrayLoss.length,
                void: pf2aArrayVoid.length,
                percent: ((pf2aArrayWin.length / (pf2aArrayLoss.length + pf2aArrayWin.length)) * 100).toFixed(2),
                averageStake: (pf2aArrayStake / pf2aArray.length).toFixed(2),
                totalUds: pf2aArrayStake.toFixed(2),
                profitUds: pf2aArrayProfit.toFixed(2),
                yield: ((pf2aArrayProfit * 100) / pf2aArrayStake).toFixed(2),
                category: "Pesos Fijos 2a"
            },
            pf3aObj : {
                bets: pf3aArray.length,
                wins: pf3aArrayWin.length,
                loss: pf3aArrayLoss.length,
                void: pf3aArrayVoid.length,
                percent: ((pf3aArrayWin.length / (pf3aArrayLoss.length + pf3aArrayWin.length)) * 100).toFixed(2),
                averageStake: (pf3aArrayStake / pf3aArray.length).toFixed(2),
                totalUds: pf3aArrayStake.toFixed(2),
                profitUds: pf3aArrayProfit.toFixed(2),
                yield: ((pf3aArrayProfit * 100) / pf3aArrayStake).toFixed(2),
                category: "Pesos Fijos 3a"
            },
            pfVjosObj : {
                bets: pfVjosArray.length,
                wins: pfVjosArrayWin.length,
                loss: pfVjosArrayLoss.length,
                void: pfVjosArrayVoid.length,
                percent: ((pfVjosArrayWin.length / (pfVjosArrayLoss.length + pfVjosArrayWin.length)) * 100).toFixed(2),
                averageStake: (pfVjosArrayStake / pfVjosArray.length).toFixed(2),
                totalUds: pfVjosArrayStake.toFixed(2),
                profitUds: pfVjosArrayProfit.toFixed(2),
                yield: ((pfVjosArrayProfit * 100) / pfVjosArrayStake).toFixed(2),
                category: "Pesos Fijos Viejos"
            },
            pfMixObj : {
                bets: pfMixArray.length,
                wins: pfMixArrayWin.length,
                loss: pfMixArrayLoss.length,
                void: pfMixArrayVoid.length,
                percent: ((pfMixArrayWin.length / (pfMixArrayLoss.length + pfMixArrayWin.length)) * 100).toFixed(2),
                averageStake: (pfMixArrayStake / pfMixArray.length).toFixed(2),
                totalUds: pfMixArrayStake.toFixed(2),
                profitUds: pfMixArrayProfit.toFixed(2),
                yield: ((pfMixArrayProfit * 100) / pfMixArrayStake).toFixed(2),
                category: "Pesos Fijos Mix"
            },
            rec2aObj : {
                bets: rec2aArray.length,
                wins: rec2aArrayWin.length,
                loss: rec2aArrayLoss.length,
                void: rec2aArrayVoid.length,
                percent: ((rec2aArrayWin.length / (rec2aArrayLoss.length + rec2aArrayWin.length)) * 100).toFixed(2),
                averageStake: (rec2aArrayStake / rec2aArray.length).toFixed(2),
                totalUds: rec2aArrayStake.toFixed(2),
                profitUds: rec2aArrayProfit.toFixed(2),
                yield: ((rec2aArrayProfit * 100) / rec2aArrayStake).toFixed(2),
                category: "Reclamar 2a"
            },
            rec3aObj : {
                bets: rec3aArray.length,
                wins: rec3aArrayWin.length,
                loss: rec3aArrayLoss.length,
                void: rec3aArrayVoid.length,
                percent: ((rec3aArrayWin.length / (rec3aArrayLoss.length + rec3aArrayWin.length)) * 100).toFixed(2),
                averageStake: (rec3aArrayStake / rec3aArray.length).toFixed(2),
                totalUds: rec3aArrayStake.toFixed(2),
                profitUds: rec3aArrayProfit.toFixed(2),
                yield: ((rec3aArrayProfit * 100) / rec3aArrayStake).toFixed(2),
                category: "Reclamar 3a"
            },
            recVjosObj : {
                bets: recVjosArray.length,
                wins: recVjosArrayWin.length,
                loss: recVjosArrayLoss.length,
                void: recVjosArrayVoid.length,
                percent: ((recVjosArrayWin.length / (recVjosArrayLoss.length + recVjosArrayWin.length)) * 100).toFixed(2),
                averageStake: (recVjosArrayStake / recVjosArray.length).toFixed(2),
                totalUds: recVjosArrayStake.toFixed(2),
                profitUds: recVjosArrayProfit.toFixed(2),
                yield: ((recVjosArrayProfit * 100) / recVjosArrayStake).toFixed(2),
                category: "Reclamar Viejos"
            },
            recMixObj : {
                bets: recMixArray.length,
                wins: recMixArrayWin.length,
                loss: recMixArrayLoss.length,
                void: recMixArrayVoid.length,
                percent: ((recMixArrayWin.length / (recMixArrayLoss.length + recMixArrayWin.length)) * 100).toFixed(2),
                averageStake: (recMixArrayStake / recMixArray.length).toFixed(2),
                totalUds: recMixArrayStake.toFixed(2),
                profitUds: recMixArrayProfit.toFixed(2),
                yield: ((recMixArrayProfit * 100) / recMixArrayStake).toFixed(2),
                category: "Reclamar Mix"
            },
            hdcp2aObj : {
                bets: hdcp2aArray.length,
                wins: hdcp2aArrayWin.length,
                loss: hdcp2aArrayLoss.length,
                void: hdcp2aArrayVoid.length,
                percent: ((hdcp2aArrayWin.length / (hdcp2aArrayLoss.length + hdcp2aArrayWin.length)) * 100).toFixed(2),
                averageStake: (hdcp2aArrayStake / hdcp2aArray.length).toFixed(2),
                totalUds: hdcp2aArrayStake.toFixed(2),
                profitUds: hdcp2aArrayProfit.toFixed(2),
                yield: ((hdcp2aArrayProfit * 100) / hdcp2aArrayStake).toFixed(2),
                category: "Handicap 2a"
            },
            hdcp3aObj : {
                bets: hdcp3aArray.length,
                wins: hdcp3aArrayWin.length,
                loss: hdcp3aArrayLoss.length,
                void: hdcp3aArrayVoid.length,
                percent: ((hdcp3aArrayWin.length / (hdcp3aArrayLoss.length + hdcp3aArrayWin.length)) * 100).toFixed(2),
                averageStake: (hdcp3aArrayStake / hdcp3aArray.length).toFixed(2),
                totalUds: hdcp3aArrayStake.toFixed(2),
                profitUds: hdcp3aArrayProfit.toFixed(2),
                yield: ((hdcp3aArrayProfit * 100) / hdcp3aArrayStake).toFixed(2),
                category: "Handicap 3a"
            },
            hdcpVjosObj : {
                bets: hdcpVjosArray.length,
                wins: hdcpVjosArrayWin.length,
                loss: hdcpVjosArrayLoss.length,
                void: hdcpVjosArrayVoid.length,
                percent: ((hdcpVjosArrayWin.length / (hdcpVjosArrayLoss.length + hdcpVjosArrayWin.length)) * 100).toFixed(2),
                averageStake: (hdcpVjosArrayStake / hdcpVjosArray.length).toFixed(2),
                totalUds: hdcpVjosArrayStake.toFixed(2),
                profitUds: hdcpVjosArrayProfit.toFixed(2),
                yield: ((hdcpVjosArrayProfit * 100) / hdcpVjosArrayStake).toFixed(2),
                category: "Handicap Viejos"
            },
            hdcpMixObj : {
                bets: hdcpMixArray.length,
                wins: hdcpMixArrayWin.length,
                loss: hdcpMixArrayLoss.length,
                void: hdcpMixArrayVoid.length,
                percent: ((hdcpMixArrayWin.length / (hdcpMixArrayLoss.length + hdcpMixArrayWin.length)) * 100).toFixed(2),
                averageStake: (hdcpMixArrayStake / hdcpMixArray.length).toFixed(2),
                totalUds: hdcpMixArrayStake.toFixed(2),
                profitUds: hdcpMixArrayProfit.toFixed(2),
                yield: ((hdcpMixArrayProfit * 100) / hdcpMixArrayStake).toFixed(2),
                category: "Handicap Mix"
            },
            combiObj : {
                bets: combiArray.length,
                wins: combiArrayWin.length,
                loss: combiArrayLoss.length,
                void: combiArrayVoid.length,
                percent: ((combiArrayWin.length / (combiArrayLoss.length + combiArrayWin.length)) * 100).toFixed(2),
                averageStake: (combiArrayStake / combiArray.length).toFixed(2),
                totalUds: combiArrayStake.toFixed(2),
                profitUds: combiArrayProfit.toFixed(2),
                yield: ((combiArrayProfit * 100) / combiArrayStake).toFixed(2),
                category: "Combinadas"
            },
        })

    }
    
    return (
        <>
            <h2 className = "stats-title" id= "title">Stats {props.statYear} por Categoría</h2>
            <div className = "table-stats-container">
                <Table striped bordered hover variant="dark" size = "sm" className = "table" responsive = "md">
                    <thead>
                        <tr>
                        <th>Categoría</th>
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
                    {categoryArray.map((item => (
                    <tbody key = {item.category}>
                        <tr>
                            <td>{item.category}</td>
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
                    </tbody>
                    )))}
                </Table>
            </div>
        </>
    );
}
 
export default StatsCategory;