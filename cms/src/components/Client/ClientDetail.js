import React, { useState, useEffect } from 'react';
import axios from 'axios'
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";

const CLIENTS_BASE_URL = 'http://localhost:3030/api/clientes/'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const ClientDetail = (props) => {

  const [ clientInfo, loadClientInfo ] = useState({})
  const [ spinner, showSpinner ] = useState(false)
  const [ dateFormated, updateDateFormated ] = useState('')

  let id = props.match.params.id

  let month = ''
  let year = ''
  let monthNumber = ''

  if (clientInfo.registerDate) {
    monthNumber = clientInfo.registerDate.slice(5,7)
    year = clientInfo.registerDate.slice(0,4)

    if (monthNumber === '01') {
      month = 'Enero'
    } else if (monthNumber === '02') {
      month = 'Febrero'
    } else if (monthNumber === '03') {
      month = 'Marzo'
    } else if (monthNumber === '04') {
      month = 'Abril'
    } else if (monthNumber === '05') {
      month = 'Mayo'
    } else if (monthNumber === '06') {
      month = 'Junio'
    } else if (monthNumber === '07') {
      month = 'Julio'
    } else if (monthNumber === '08') {
      month = 'Agosto'
    } else if (monthNumber === '09') {
      month = 'Septiembre'
    } else if (monthNumber === '10') {
      month = 'Octubre'
    } else if (monthNumber === '11') {
      month = 'Noviembre'
    } else {
      month = 'Diciembre'
    }
  }

  useEffect(() => {

    async function  loadClient() {
      try {
        showSpinner(true)
        let res = await axios.get(`${CLIENTS_BASE_URL}informacion-cliente/${id}`)
        loadClientInfo(res.data.data)
        showSpinner(false)
      } catch (error) {
        
      }
    }
    loadClient ()
  }, [])

  useEffect(() => {
    updateDateFormated(`${month}-${year}`)
    
  }, [clientInfo])



  return (

    <div>
      { spinner ?
      
        <div className = "spinnerContainer">
        <DotLoader 
          color={"#136F63"} 
          loading={spinner} 
          css={override} 
          size={150} />
        </div>
    
      :
        <div>
          <h1>Detalles de Cliente</h1>
          <div className = "client-info">
            <p>Nombre: <span>{ clientInfo.name }</span></p>
            <p>Teléfono: <span>{ clientInfo.phone }</span></p>
            <p>Fecha de Registro: <span>{ dateFormated }</span></p>
            <p>Recomendado por: <span>{ clientInfo.referred }</span></p>
          </div>
          <div className = "payments-history">

          </div>
        </div>
      }
    </div>
  );
}
 
export default ClientDetail;