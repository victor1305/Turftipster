import React, { Fragment, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap'
import BetService from '../../../service/BetService'

const StatsNextYears = (props) => {

    const betservice = new BetService()

    const [ betList, loadBetList ] = useState([])

    const [ year, updateYear ] = useState({
        january : {
            bets: "",
            wins: "",
            loss: "",
            void: "",
            percent: "",
            averageStake: "",
            totalUds: "",
            profitUds: "",
            yield: ""
        },
        february : {
            bets: "",
            wins: "",
            loss: "",
            void: "",
            percent: "",
            averageStake: "",
            totalUds: "",
            profitUds: "",
            yield: ""
        },
        march : {
            bets: "",
            wins: "",
            loss: "",
            void: "",
            percent: "",
            averageStake: "",
            totalUds: "",
            profitUds: "",
            yield: ""
        },
        april : {
            bets: "",
            wins: "",
            loss: "",
            void: "",
            percent: "",
            averageStake: "",
            totalUds: "",
            profitUds: "",
            yield: ""
        },
        may : {
            bets: "",
            wins: "",
            loss: "",
            void: "",
            percent: "",
            averageStake: "",
            totalUds: "",
            profitUds: "",
            yield: ""
        },
        june : {
            bets: "",
            wins: "",
            loss: "",
            void: "",
            percent: "",
            averageStake: "",
            totalUds: "",
            profitUds: "",
            yield: ""
        },
        july : {
            bets: "",
            wins: "",
            loss: "",
            void: "",
            percent: "",
            averageStake: "",
            totalUds: "",
            profitUds: "",
            yield: ""
        },
        august : {
            bets: "",
            wins: "",
            loss: "",
            void: "",
            percent: "",
            averageStake: "",
            totalUds: "",
            profitUds: "",
            yield: ""
        },
        september : {
            bets: "",
            wins: "",
            loss: "",
            void: "",
            percent: "",
            averageStake: "",
            totalUds: "",
            profitUds: "",
            yield: ""
        },
        october : {
            bets: "",
            wins: "",
            loss: "",
            void: "",
            percent: "",
            averageStake: "",
            totalUds: "",
            profitUds: "",
            yield: ""
        },
        november : {
            bets: "",
            wins: "",
            loss: "",
            void: "",
            percent: "",
            averageStake: "",
            totalUds: "",
            profitUds: "",
            yield: ""
        },
        december : {
            bets: "",
            wins: "",
            loss: "",
            void: "",
            percent: "",
            averageStake: "",
            totalUds: "",
            profitUds: "",
            yield: ""
        },
        total : {
            bets: "",
            wins: "",
            loss: "",
            void: "",
            percent: "",
            averageStake: "",
            totalUds: "",
            profitUds: "",
            yield: ""
        }

    })

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

    //------------------BETS ARRAY----------------------------------------

        const betsJanuary = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-01-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-01-31T23:59:59.951+00:00`)))
        const betsFebruary = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-02-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-03-01T00:00:00.951+00:00`)))
        const betsMarch = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-03-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-03-31T23:59:59.951+00:00`)))
        const betsApril = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-04-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-04-30T23:59:59.951+00:00`)))
        const betsMay = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-05-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-05-31T23:59:59.951+00:00`)))
        const betsJune = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-06-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-06-30T23:59:59.951+00:00`)))
        const betsJuly = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-07-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-07-31T23:59:59.951+00:00`)))
        const betsAugust = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-08-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-08-31T23:59:59.951+00:00`)))
        const betsSeptember = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-09-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-09-30T23:59:59.951+00:00`)))
        const betsOctober = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-10-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-10-31T23:59:59.951+00:00`)))
        const betsNovember = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-11-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-11-30T23:59:59.951+00:00`)))
        const betsDecember = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-12-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-12-31T23:59:59.951+00:00`)))

    //------------------BETS WIN ARRAY----------------------------------------

        const betsWinJanuary = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-01-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-01-31T23:59:59.951+00:00`)) && (elm.status === "win"))
        const betsWinFebruary = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-02-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-03-01T00:00:00.951+00:00`)) && (elm.status === "win"))
        const betsWinMarch = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-03-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-03-31T23:59:59.951+00:00`)) && (elm.status === "win"))
        const betsWinApril = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-04-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-04-30T23:59:59.951+00:00`)) && (elm.status === "win"))
        const betsWinMay = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-05-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-05-31T23:59:59.951+00:00`)) && (elm.status === "win"))
        const betsWinJune = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-06-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-06-30T23:59:59.951+00:00`)) && (elm.status === "win"))
        const betsWinJuly = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-07-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-07-31T23:59:59.951+00:00`)) && (elm.status === "win"))
        const betsWinAugust = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-08-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-08-31T23:59:59.951+00:00`)) && (elm.status === "win"))
        const betsWinSeptember = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-09-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-09-30T23:59:59.951+00:00`)) && (elm.status === "win"))
        const betsWinOctober = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-10-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-10-31T23:59:59.951+00:00`)) && (elm.status === "win"))
        const betsWinNovember = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-11-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-11-30T23:59:59.951+00:00`)) && (elm.status === "win"))
        const betsWinDecember = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-12-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-12-31T23:59:59.951+00:00`)) && (elm.status === "win"))

    //------------------BETS LOSS ARRAY----------------------------------------

        const betsLossJanuary = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-01-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-01-31T23:59:59.951+00:00`)) && (elm.status === "loss"))
        const betsLossFebruary = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-02-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-03-01T00:00:00.951+00:00`)) && (elm.status === "loss"))
        const betsLossMarch = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-03-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-03-31T23:59:59.951+00:00`)) && (elm.status === "loss"))
        const betsLossApril = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-04-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-04-30T23:59:59.951+00:00`)) && (elm.status === "loss"))
        const betsLossMay = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-05-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-05-31T23:59:59.951+00:00`)) && (elm.status === "loss"))
        const betsLossJune = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-06-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-06-30T23:59:59.951+00:00`)) && (elm.status === "loss"))
        const betsLossJuly = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-07-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-07-31T23:59:59.951+00:00`)) && (elm.status === "loss"))
        const betsLossAugust = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-08-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-08-31T23:59:59.951+00:00`)) && (elm.status === "loss"))
        const betsLossSeptember = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-09-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-09-30T23:59:59.951+00:00`)) && (elm.status === "loss"))
        const betsLossOctober = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-10-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-10-31T23:59:59.951+00:00`)) && (elm.status === "loss"))
        const betsLossNovember = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-11-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-11-30T23:59:59.951+00:00`)) && (elm.status === "loss"))
        const betsLossDecember = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-12-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-12-31T23:59:59.951+00:00`)) && (elm.status === "loss"))

    //------------------BETS VOID ARRAY----------------------------------------

        const betsVoidJanuary = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-01-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-01-31T23:59:59.951+00:00`)) && (elm.status === "void"))
        const betsVoidFebruary = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-02-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-03-01T00:00:00.951+00:00`)) && (elm.status === "void"))
        const betsVoidMarch = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-03-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-03-31T23:59:59.951+00:00`)) && (elm.status === "void"))
        const betsVoidApril = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-04-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-04-30T23:59:59.951+00:00`)) && (elm.status === "void"))
        const betsVoidMay = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-05-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-05-31T23:59:59.951+00:00`)) && (elm.status === "void"))
        const betsVoidJune = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-06-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-06-30T23:59:59.951+00:00`)) && (elm.status === "void"))
        const betsVoidJuly = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-07-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-07-31T23:59:59.951+00:00`)) && (elm.status === "void"))
        const betsVoidAugust = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-08-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-08-31T23:59:59.951+00:00`)) && (elm.status === "void"))
        const betsVoidSeptember = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-09-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-09-30T23:59:59.951+00:00`)) && (elm.status === "void"))
        const betsVoidOctober = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-10-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-10-31T23:59:59.951+00:00`)) && (elm.status === "void"))
        const betsVoidNovember = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-11-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-11-30T23:59:59.951+00:00`)) && (elm.status === "void"))
        const betsVoidDecember = betList.filter(elm => (new Date(elm.date) > new Date(`${props.statYear}-12-01T00:00:00.951+00:00`)) && (new Date(elm.date) < new Date(`${props.statYear}-12-31T23:59:59.951+00:00`)) && (elm.status === "void"))

    //------------------STAKE----------------------------------------

        const totalStakeJanuary = betsJanuary.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const totalStakeFebruary = betsFebruary.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const totalStakeMarch = betsMarch.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const totalStakeApril = betsApril.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const totalStakeMay = betsMay.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const totalStakeJune = betsJune.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const totalStakeJuly = betsJuly.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const totalStakeAugust = betsAugust.reduce((acc, elm) => {
            return acc + elm.stake},0)  
        const totalStakeSeptember = betsSeptember.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const totalStakeOctober = betsOctober.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const totalStakeNovember = betsNovember.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const totalStakeDecember = betsDecember.reduce((acc, elm) => {
            return acc + elm.stake},0)  
            
    //------------------PROFIT----------------------------------------

        const januaryProfitUds = betsJanuary.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const februaryProfitUds = betsFebruary.reduce((acc, elm) => {
            return acc + elm.profit},0)            
        const marchProfitUds = betsMarch.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const aprilProfitUds = betsApril.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const mayProfitUds = betsMay.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const juneProfitUds = betsJune.reduce((acc, elm) => {
            return acc + elm.profit},0)            
        const julyProfitUds = betsJuly.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const augustProfitUds = betsAugust.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const septemberProfitUds = betsSeptember.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const octoberProfitUds = betsOctober.reduce((acc, elm) => {
            return acc + elm.profit},0)            
        const novemberProfitUds = betsNovember.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const decemberProfitUds = betsDecember.reduce((acc, elm) => {
            return acc + elm.profit},0)

    //-----------------TOTALS-----------------------------------------------

        const betsYear = betList.length
        const betsWinYear = betList.filter(elm => elm.status === "win")
        const betsLossYear = betList.filter(elm => elm.status === "loss")
        const betsVoidYear = betList.filter(elm => elm.status === "void")
        const totalStakeYear = betList.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const yearProfitUds = betList.reduce((acc, elm) => {
            return acc + elm.profit},0)


        updateYear({
            january : {
                bets: betsJanuary.length,
                wins: betsWinJanuary.length,
                loss: betsLossJanuary.length,
                void: betsVoidJanuary.length,
                percent: ((betsWinJanuary.length / (betsLossJanuary.length + betsWinJanuary.length)) * 100).toFixed(2),
                averageStake: (totalStakeJanuary / betsJanuary.length).toFixed(2),
                totalUds: totalStakeJanuary,
                profitUds: januaryProfitUds.toFixed(2),
                yield: ((januaryProfitUds * 100) / totalStakeJanuary).toFixed(2)
            },
            february: {
                bets: betsFebruary.length,
                wins: betsWinFebruary.length,
                loss: betsLossFebruary.length,
                void: betsVoidFebruary.length,
                percent: ((betsWinFebruary.length / (betsLossFebruary.length + betsWinFebruary.length)) * 100).toFixed(2),
                averageStake: (totalStakeFebruary / betsFebruary.length).toFixed(2),
                totalUds: totalStakeFebruary,
                profitUds: februaryProfitUds.toFixed(2),
                yield: ((februaryProfitUds * 100) / totalStakeFebruary).toFixed(2)
            },
            march: {
                bets: betsMarch.length,
                wins: betsWinMarch.length,
                loss: betsLossMarch.length,
                void: betsVoidMarch.length,
                percent: ((betsWinMarch.length / (betsLossMarch.length + betsWinMarch.length)) * 100).toFixed(2),
                averageStake: (totalStakeMarch / betsMarch.length).toFixed(2),
                totalUds: totalStakeMarch,
                profitUds: marchProfitUds.toFixed(2),
                yield: ((marchProfitUds * 100) / totalStakeMarch).toFixed(2)
                
            },
            april: {
                bets: betsApril.length,
                wins: betsWinApril.length,
                loss: betsLossApril.length,
                void: betsVoidApril.length,
                percent: ((betsWinApril.length / (betsLossApril.length + betsWinApril.length)) * 100).toFixed(2),
                averageStake: (totalStakeApril / betsApril.length).toFixed(2),
                totalUds: totalStakeApril,
                profitUds: aprilProfitUds.toFixed(2),
                yield: ((aprilProfitUds * 100) / totalStakeApril).toFixed(2)
            },
            may: {
                bets: betsMay.length,
                wins: betsWinMay.length,
                loss: betsLossMay.length,
                void: betsVoidMay.length,
                percent: ((betsWinMay.length / (betsLossMay.length + betsWinMay.length)) * 100).toFixed(2),
                averageStake: (totalStakeMay / betsMay.length).toFixed(2),
                totalUds: totalStakeMay,
                profitUds: mayProfitUds.toFixed(2),
                yield: ((mayProfitUds * 100) / totalStakeMay).toFixed(2)
            },
            june: {
                bets: betsJune.length,
                wins: betsWinJune.length,
                loss: betsLossJune.length,
                void: betsVoidJune.length,
                percent: ((betsWinJune.length / (betsLossJune.length + betsWinJune.length)) * 100).toFixed(2),
                averageStake: (totalStakeJune / betsJune.length).toFixed(2),
                totalUds: totalStakeJune,
                profitUds: juneProfitUds.toFixed(2),
                yield: ((juneProfitUds * 100) / totalStakeJune).toFixed(2)
            },
            july: {
                bets: betsJuly.length,
                wins: betsWinJuly.length,
                loss: betsLossJuly.length,
                void: betsVoidJuly.length,
                percent: ((betsWinJuly.length / (betsLossJuly.length + betsWinJuly.length)) * 100).toFixed(2),
                averageStake: (totalStakeJuly / betsJuly.length).toFixed(2),
                totalUds: totalStakeJuly,
                profitUds: julyProfitUds.toFixed(2),
                yield: ((julyProfitUds * 100) / totalStakeJuly).toFixed(2)
            },
            august: {
                bets: betsAugust.length,
                wins: betsWinAugust.length,
                loss: betsLossAugust.length,
                void: betsVoidAugust.length,
                percent: ((betsWinAugust.length / (betsLossAugust.length + betsWinAugust.length)) * 100).toFixed(2),
                averageStake: (totalStakeAugust / betsAugust.length).toFixed(2),
                totalUds: totalStakeAugust,
                profitUds: augustProfitUds.toFixed(2),
                yield: ((augustProfitUds * 100) / totalStakeAugust).toFixed(2)
            },
            september: {
                bets: betsSeptember.length,
                wins: betsWinSeptember.length,
                loss: betsLossSeptember.length,
                void: betsVoidSeptember.length,
                percent: ((betsWinSeptember.length / (betsLossSeptember.length + betsWinSeptember.length)) * 100).toFixed(2),
                averageStake: (totalStakeSeptember / betsSeptember.length).toFixed(2),
                totalUds: totalStakeSeptember,
                profitUds: septemberProfitUds.toFixed(2),
                yield: ((septemberProfitUds * 100) / totalStakeSeptember).toFixed(2)
            },
            october: {
                bets: betsOctober.length,
                wins: betsWinOctober.length,
                loss: betsLossOctober.length,
                void: betsVoidOctober.length,
                percent: ((betsWinOctober.length / (betsLossOctober.length + betsWinOctober.length)) * 100).toFixed(2),
                averageStake: (totalStakeOctober / betsOctober.length).toFixed(2),
                totalUds: totalStakeOctober,
                profitUds: octoberProfitUds.toFixed(2),
                yield: ((octoberProfitUds * 100) / totalStakeOctober).toFixed(2)
            },
            november: {
                bets: betsNovember.length,
                wins: betsWinNovember.length,
                loss: betsLossNovember.length,
                void: betsVoidNovember.length,
                percent: ((betsWinNovember.length / (betsLossNovember.length + betsWinNovember.length)) * 100).toFixed(2),
                averageStake: (totalStakeNovember / betsNovember.length).toFixed(2),
                totalUds: totalStakeNovember,
                profitUds: novemberProfitUds.toFixed(2),
                yield: ((novemberProfitUds * 100) / totalStakeNovember).toFixed(2)

            },
            december: {
                bets: betsDecember.length,
                wins: betsWinDecember.length,
                loss: betsLossDecember.length,
                void: betsVoidDecember.length,
                percent: ((betsWinDecember.length / (betsLossDecember.length + betsWinDecember.length)) * 100).toFixed(2),
                averageStake: (totalStakeDecember / betsDecember.length).toFixed(2),
                totalUds: totalStakeDecember,
                profitUds: decemberProfitUds.toFixed(2),
                yield: ((decemberProfitUds * 100) / totalStakeDecember).toFixed(2)
            },
            total: {
                bets: betsYear,
                wins: betsWinYear.length,
                loss: betsLossYear.length,
                void: betsVoidYear.length,
                percent: ((betsWinYear.length / (betsLossYear.length + betsWinYear.length)) * 100).toFixed(2),
                averageStake: (totalStakeYear / betsYear).toFixed(2),
                totalUds: totalStakeYear,
                profitUds: yearProfitUds.toFixed(2),
                yield: ((yearProfitUds * 100) / totalStakeYear).toFixed(2)
            }
        })



    }
    
    return (

        <Fragment>
            <h2 className = "stats-title" id= "title">Stats {props.statYear}</h2>
            <div className = "table-stats-container">
            <Table striped bordered hover variant="dark" size = "sm" className = "table" responsive = "md">
                <thead

                >
                    <tr>
                    <th>Mes</th>
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
                    <tr>
                        <td>Enero</td>
                        <td>{year.january.bets}</td>
                        <td>{year.january.wins}</td>
                        <td>{year.january.loss}</td>
                        <td>{year.january.void}</td>
                        <td>{year.january.percent !== "NaN" ? `${year.january.percent}%` : "Sin datos"}</td>
                        <td>{year.january.averageStake === "NaN" ? "Sin Datos" : year.january.averageStake}</td>
                        <td>{year.january.totalUds}</td>
                        <td className = {year.january.yield >= 0 ? "stats-green" : "stats-red"}>{year.january.yield !== "NaN" ? `${year.january.yield}%` : "Sin datos"}</td>
                        <td className = {year.january.profitUds >= 0 ? "stats-green" : "stats-red"}>{year.january.profitUds}</td>
                    </tr>
                    <tr>
                        <td>Febrero</td>
                        <td>{year.february.bets}</td>
                        <td>{year.february.wins}</td>
                        <td>{year.february.loss}</td>
                        <td>{year.february.void}</td>
                        <td>{year.february.percent !== "NaN" ? `${year.february.percent}%` : "Sin datos"}</td>
                        <td>{year.february.averageStake === "NaN" ? "Sin Datos" : year.february.averageStake}</td>
                        <td>{year.february.totalUds}</td>
                        <td className = {year.february.yield >= 0 ? "stats-green" : "stats-red"}>{year.february.yield !== "NaN" ? `${year.february.yield}%` : "Sin datos"}</td>
                        <td className = {year.february.profitUds >= 0 ? "stats-green" : "stats-red"}>{year.february.profitUds}</td>
                    </tr>
                    <tr>
                        <td>Marzo</td>
                        <td>{year.march.bets}</td>
                        <td>{year.march.wins}</td>
                        <td>{year.march.loss}</td>
                        <td>{year.march.void}</td>
                        <td>{year.march.percent !== "NaN" ? `${year.march.percent}%` : "Sin datos"}</td>
                        <td>{year.march.averageStake === "NaN" ? "Sin Datos" : year.march.averageStake}</td>
                        <td>{year.march.totalUds}</td>
                        <td className = {year.march.yield >= 0 ? "stats-green" : "stats-red"}>{year.march.yield !== "NaN" ? `${year.march.yield}%` : "Sin datos"}</td>
                        <td className = {year.march.profitUds >= 0 ? "stats-green" : "stats-red"}>{year.march.profitUds}</td>
                    </tr>
                    <tr>
                        <td>Abril</td>
                        <td>{year.april.bets}</td>
                        <td>{year.april.wins}</td>
                        <td>{year.april.loss}</td>
                        <td>{year.april.void}</td>
                        <td>{year.april.percent !== "NaN" ? `${year.april.percent}%` : "Sin datos"}</td>
                        <td>{year.april.averageStake === "NaN" ? "Sin Datos" : year.april.averageStake}</td>
                        <td>{year.april.totalUds}</td>
                        <td className = {year.april.yield >= 0 ? "stats-green" : "stats-red"}>{year.april.yield !== "NaN" ? `${year.april.yield}%` : "Sin datos"}</td>
                        <td className = {year.april.profitUds >= 0 ? "stats-green" : "stats-red"}>{year.april.profitUds}</td>
                    </tr>
                    <tr>
                        <td>Mayo</td>
                        <td>{year.may.bets}</td>
                        <td>{year.may.wins}</td>
                        <td>{year.may.loss}</td>
                        <td>{year.may.void}</td>
                        <td>{year.may.percent !== "NaN" ? `${year.may.percent}%` : "Sin datos"}</td>
                        <td>{year.may.averageStake === "NaN" ? "Sin Datos" : year.may.averageStake}</td>
                        <td>{year.may.totalUds}</td>
                        <td className = {year.may.yield >= 0 ? "stats-green" : "stats-red"}>{year.may.yield !== "NaN" ? `${year.may.yield}%` : "Sin datos"}</td>
                        <td className = {year.may.profitUds >= 0 ? "stats-green" : "stats-red"}>{year.may.profitUds}</td>
                    </tr>
                    <tr>
                        <td>Junio</td>
                        <td>{year.june.bets}</td>
                        <td>{year.june.wins}</td>
                        <td>{year.june.loss}</td>
                        <td>{year.june.void}</td>
                        <td>{year.june.percent  !== "NaN" ? `${year.june.percent}%` : "Sin datos"}</td>
                        <td>{year.june.averageStake === "NaN" ? "Sin Datos" : year.june.averageStake}</td>
                        <td>{year.june.totalUds}</td>
                        <td className = {year.june.yield >= 0 ? "stats-green" : "stats-red"}>{year.june.yield !== "NaN" ? `${year.june.yield}%` : "Sin datos"}</td>
                        <td className = {year.june.profitUds >= 0 ? "stats-green" : "stats-red"}>{year.june.profitUds}</td>
                    </tr>
                    <tr>
                        <td>Julio</td>
                        <td>{year.july.bets}</td>
                        <td>{year.july.wins}</td>
                        <td>{year.july.loss}</td>
                        <td>{year.july.void}</td>
                        <td>{year.july.percent !== "NaN" ? `${year.july.percent}%` : "Sin datos"}</td>
                        <td>{year.july.averageStake === "NaN" ? "Sin Datos" : year.july.averageStake}</td>
                        <td>{year.july.totalUds}</td>
                        <td className = {year.july.yield >= 0 ? "stats-green" : "stats-red"}>{year.july.yield !== "NaN" ? `${year.july.yield}%` : "Sin datos"}</td>
                        <td className = {year.july.profitUds >= 0 ? "stats-green" : "stats-red"}>{year.july.profitUds}</td>
                    </tr>
                    <tr>
                        <td>Agosto</td>
                        <td>{year.august.bets}</td>
                        <td>{year.august.wins}</td>
                        <td>{year.august.loss}</td>
                        <td>{year.august.void}</td>
                        <td>{year.august.percent !== "NaN" ? `${year.august.percent}%` : "Sin datos"}</td>
                        <td>{year.august.averageStake === "NaN" ? "Sin Datos" : year.august.averageStake}</td>
                        <td>{year.august.totalUds}</td>
                        <td className = {year.august.yield >= 0 ? "stats-green" : "stats-red"}>{year.august.yield !== "NaN" ? `${year.august.yield}%` : "Sin datos"}</td>
                        <td className = {year.august.profitUds >= 0 ? "stats-green" : "stats-red"}>{year.august.profitUds}</td>
                    </tr>
                    <tr>
                        <td>Septiembre</td>
                        <td>{year.september.bets}</td>
                        <td>{year.september.wins}</td>
                        <td>{year.september.loss}</td>
                        <td>{year.september.void}</td>
                        <td>{year.september.percent !== "NaN" ? `${year.september.percent}%` : "Sin datos"}</td>
                        <td>{year.september.averageStake === "NaN" ? "Sin Datos" : year.september.averageStake}</td>
                        <td>{year.september.totalUds}</td>
                        <td className = {year.september.yield >= 0 ? "stats-green" : "stats-red"}>{year.september.yield !== "NaN" ? `${year.september.yield}%` : "Sin datos"}</td>
                        <td className = {year.september.profitUds >= 0 ? "stats-green" : "stats-red"}>{year.september.profitUds}</td>
                    </tr>
                    <tr>
                        <td>Octubre</td>
                        <td>{year.october.bets}</td>
                        <td>{year.october.wins}</td>
                        <td>{year.october.loss}</td>
                        <td>{year.october.void}</td>
                        <td>{year.october.percent !== "NaN" ? `${year.october.percent}%` : "Sin datos"}</td>
                        <td>{year.october.averageStake === "NaN" ? "Sin Datos" : year.october.averageStake}</td>
                        <td>{year.october.totalUds}</td>
                        <td className = {year.october.yield >= 0 ? "stats-green" : "stats-red"}>{year.october.yield !== "NaN" ? `${year.october.yield}%` : "Sin datos"}</td>
                        <td className = {year.october.profitUds >= 0 ? "stats-green" : "stats-red"}>{year.october.profitUds}</td>
                    </tr>
                    <tr>
                        <td>Noviembre</td>
                        <td>{year.november.bets}</td>
                        <td>{year.november.wins}</td>
                        <td>{year.november.loss}</td>
                        <td>{year.november.void}</td>
                        <td>{year.november.percent !== "NaN" ? `${year.november.percent}%` : "Sin datos"}</td>
                        <td>{year.november.averageStake === "NaN" ? "Sin Datos" : year.november.averageStake}</td>
                        <td>{year.november.totalUds}</td>
                        <td className = {year.november.yield >= 0 ? "stats-green" : "stats-red"}>{year.november.yield !== "NaN" ? `${year.november.yield}%` : "Sin datos"}</td>
                        <td className = {year.november.profitUds >= 0 ? "stats-green" : "stats-red"}>{year.november.profitUds}</td>
                    </tr>
                    <tr>
                        <td>Diciembre</td>
                        <td>{year.december.bets}</td>
                        <td>{year.december.wins}</td>
                        <td>{year.december.loss}</td>
                        <td>{year.december.void}</td>
                        <td>{year.december.percent !== "NaN" ? `${year.december.percent}%` : "Sin datos"}</td>
                        <td>{year.december.averageStake === "NaN" ? "Sin Datos" : year.december.averageStake}</td>
                        <td>{year.december.totalUds}</td>
                        <td className = {year.december.yield >= 0 ? "stats-green" : "stats-red"}>{year.december.yield !== "NaN" ? `${year.december.yield}%` : "Sin datos"}</td>
                        <td className = {year.december.profitUds >= 0 ? "stats-green" : "stats-red"}>{year.december.profitUds}</td>
                    </tr>
                    <tr>
                        <td>Total Año</td>
                        <td>{year.total.bets}</td>
                        <td>{year.total.wins}</td>
                        <td>{year.total.loss}</td>
                        <td>{year.total.void}</td>
                        <td>{year.total.percent !== "NaN" ? `${year.total.percent}%` : "Sin Datos"}</td>
                        <td>{year.total.averageStake === "NaN" ? "Sin Datos" : year.total.averageStake}</td>
                        <td>{year.total.totalUds}</td>
                        <td className = {year.total.yield >= 0 ? "stats-green" : "stats-red"}>{year.total.yield !== "NaN" ? `${year.total.yield}%` : "Sin datos"}</td>
                        <td className = {year.total.profitUds >= 0 ? "stats-green" : "stats-red"}>{year.total.profitUds}</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </Fragment>

    );
}
 
export default StatsNextYears;