import React, { useState, useEffect } from 'react'
import './bets.css'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";

import BetCard from './BetCard'
import BetModal from './Modals/BetModal'
import ParameterModal from './Modals/ParameterModal'
import { Link } from 'react-router-dom';
import axios from 'axios'

const BETS_BASE_URL = 'http://localhost:3030/api/apuestas/'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const Bets = (props) => {

  // HOOKS ---------------------------------------------------------------------

  // MODALS-----------------------------

  const [ modalBets, showModalBets ] = useState(false)
  const [ modalParameter, showModalParameter ] = useState(false)
  const [ betCodes, loadBetCodes ] = useState([])
  const [ racecourses, loadRacecourses ] = useState([])
  const [ stakes, loadStakes ] = useState([])
  const [ errors, deleteErrors ] = useState(false)

  // SPINNER

  const [ spinner, showSpinner ] = useState(true)

  // GETS

  const [ betList, loadBetList ] = useState([])
  const [ totalBet, loadTotalBetList ] = useState(0)

  // PAGES
  // eslint-disable-next-line
  const [ limit, setLimit ] = useState(42);
  const [ skip, setSkip ] = useState(0);

  useEffect(() => {
    async function loadBets() {
      try {
        showSpinner(true)
        const resNumber = await axios.get(`${BETS_BASE_URL}lista-apuestas/total`)
        loadTotalBetList(resNumber.data)
        const resBets = await axios.get(`${BETS_BASE_URL}lista-apuestas?limit=${limit}&skip=${skip}`)
        loadBetList(resBets.data)
        const resStakes = await axios.get(`${BETS_BASE_URL}lista-stakes`)
        loadStakes(resStakes.data)
        const resRacecourses = await axios.get(`${BETS_BASE_URL}lista-hipodromos`)
        loadRacecourses(resRacecourses.data)
        const resBetCodes = await axios.get(`${BETS_BASE_URL}lista-codigos`)
        loadBetCodes(resBetCodes.data)
        showSpinner(false)
        
      } catch (error) {
        console.log(error)
        showSpinner(false)
      }

    }
    loadBets()
    // eslint-disable-next-line
  }, [])

  //------------------------------------------------------------------------------------------

  // MODALS FUNCIONALITIES

  const openModalBets = () => {
    showModalBets(true)
  }

  const closeModalBets = () => {
    showModalBets(false)
    document.getElementById('bets-form').reset()
    deleteErrors(true)
  } 

  const openModalParameter = () => {
    showModalParameter(true)
  }

  const closeModalParameter = () => {
    showModalParameter(false)
    document.getElementById('parameters-form').reset()
  } 

  //------------------------------------------------------------------------------------------

  // FUNCTIONS

  const reloadBets = async () => {

    try {
      showSpinner(true)
      const res = await axios.get(`${BETS_BASE_URL}lista-apuestas?limit=${limit}&skip=${skip}`)
      loadBetList(res.data)
      showSpinner(false)
      
    } catch (error) {
      console.log(error)
      showSpinner(false)
    }
  }

  const nextPage = () => {
    setSkip(skip + limit)
  }

  const previousPage = () => {
      setSkip(skip - limit)
  }

  const page = skip/limit

  let totalPage = 0

  if (totalBet % limit === 0) {
    totalPage = (totalBet / limit) -1
  
  } else {
    totalPage = Math.floor(totalBet / limit)
  }


  return (
    <div className = "bets-page-container">
      <h1>Gestión de Apuestas</h1>
      
      <BetModal 
        show = { modalBets } 
        handleClose = { closeModalBets } 
        deleteErrors = {errors} 
        reloadBets = { reloadBets } 
        showSpinner = { showSpinner } 
        racecourses = { racecourses } 
        stakes = { stakes }
        betCodes = { betCodes }
        {...props}/>

      <ParameterModal 
        show = { modalParameter } 
        handleClose = { closeModalParameter } 
        showSpinner = { showSpinner }/>

      {spinner ?
        <div className = "spinnerContainer">
        <DotLoader 
          color={"#136F63"} 
          loading={spinner} 
          css={override} 
          size={150} />
        </div>
      :
        <div>
          <div className = "btns-container">
            <div className = "principal-button-container">
              <button className = "principal-button" onClick = { openModalBets }>Crear Apuesta</button>
            </div>
            <div>
              <Link to = '/index'><button className = "logo-button"/></Link>
            </div>
            <div className = "aux-button-container">
              <button className = "aux-button" onClick = { openModalParameter }>Añadir Parámetro</button>
            </div>
          </div>
          <div className = "bet-list-container">
            <div className = "bet-list-header">
              {page > 0 &&
                <button onClick={previousPage} className = "previous-page"/>
              }
              {totalPage > 0 &&
                <span>Página {page + 1} de {totalPage + 1}</span>
              }
              {page < totalPage &&
                <button onClick={nextPage} className = "next-page"/> 
              }
            </div>
            <div className = "bets-list">
              {betList.map((item => ( 
                <BetCard 
                  key = {item._id} 
                  {...item} 
                  {...props} 
                  racecourses = { racecourses } 
                  stakes = { stakes }
                  betCodes = { betCodes }
                  reloadBets = { reloadBets } 
                  deleteErrors = {errors} 
                  showSpinner = { showSpinner }/>
              )))
              }
            </div>
          </div>
        </div>
      }
    </div>
  );
}
 
export default Bets;