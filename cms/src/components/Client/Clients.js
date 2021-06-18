import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { css } from "@emotion/react";
import axios from 'axios'
import DotLoader from "react-spinners/DotLoader";
import ClientModal from './Modals/ClientModal'
import PayModal from './Modals/PayModal'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ConfirmationModal from '../Modal/ConfirmationModal'

import './clients.css'

const CLIENTS_BASE_URL = 'http://localhost:3030/api/clientes/'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const Clients = (props) => {

  // HOOKS

  const [ modalClient, showModalClient ] = useState(false)
  const [ modalPay, showModalPay ] = useState(false)
  const [ modalEditPay, showModalEditPay ] = useState(false)
  const [ confirmationModal, showConfirmationModal ] = useState(false)
  const [ errors, deleteErrors ] = useState(false)
  const [ spinner, showSpinner ] = useState(false)
  const [ clientsList, loadClientsList ] = useState([])
  const [ adminsList, loadAdminsList ] = useState([])
  const [ paysList, loadPaysList ] = useState([])
  const [ payInfo, loadPayInfo ] = useState({})
  const [ startDate, setStartDate ] = useState(new Date())

  // VARIABLES

  const monthNumber = startDate.getMonth()
  let monthFormated = monthNumber + 1
  
  if (monthFormated < 10) monthFormated = `0${monthFormated}`

  let year = startDate.getFullYear()
  let month = ''

  let totalPayments = paysList.length > 0 && paysList.reduce((acc, elm) => {
    return acc + elm.price},0)

  const paymentsAntonioArr = paysList.length > 0 && paysList.filter(elm => (elm.beneficiary[0] === 'Antonio'))
  const paymentsAntonio = paymentsAntonioArr.length > 0 && paymentsAntonioArr.reduce((acc, elm) => {
    return acc + elm.price},0)

  const paymentsEduArr = paysList.length > 0 && paysList.filter(elm => (elm.beneficiary[0] === 'Eduardo'))
  const paymentsEdu = paymentsEduArr.length > 0 && paymentsEduArr.reduce((acc, elm) => {
    return acc + elm.price},0)    

  const paymentsVictorArr = paysList.length > 0 && paysList.filter(elm => (elm.beneficiary[0] === 'Víctor'))
  const paymentsVictor = paymentsVictorArr.length > 0 && paymentsVictorArr.reduce((acc, elm) => {
    return acc + elm.price},0)

  if (monthNumber === 0) {
    month = 'Enero'
  } else if (monthNumber === 1) {
    month = 'Febrero'
  } else if (monthNumber === 2) {
    month = 'Marzo'
  } else if (monthNumber === 3) {
    month = 'Abril'
  } else if (monthNumber === 4) {
    month = 'Mayo'
  } else if (monthNumber === 5) {
    month = 'Junio'
  } else if (monthNumber === 6) {
    month = 'Julio'
  } else if (monthNumber === 7) {
    month = 'Agosto'
  } else if (monthNumber === 8) {
    month = 'Septiembre'
  } else if (monthNumber === 9) {
    month = 'Octubre'
  } else if (monthNumber === 10) {
    month = 'Noviembre'
  } else {
    month = 'Diciembre'
  }



  useEffect(() => {
    async function loadData() {
      try {
        showSpinner(true)
        const resClients = await axios.get(`${CLIENTS_BASE_URL}lista-clientes`)
        loadClientsList(resClients.data)
        const resAdmins = await axios.get(`${CLIENTS_BASE_URL}lista-administradores`)
        loadAdminsList(resAdmins.data)
        const resPays = await axios.get(`${CLIENTS_BASE_URL}lista-pagos/${year}/${monthFormated}`)
        loadPaysList(resPays.data.data)
        showSpinner(false)

        
      } catch (error) {
        console.log(error)
        showSpinner(false)
      }

    }
    loadData()
    // eslint-disable-next-line
  }, [])

  useEffect(() => { 
    async function updatePaysByMonth() {
      try {
        showSpinner(true)
        const resPays = await axios.get(`${CLIENTS_BASE_URL}lista-pagos/${year}/${monthFormated}`)
        loadPaysList(resPays.data.data)
        showSpinner(false)
      } catch (error) {
        console.log(error)
        showSpinner(false)
      }
    }

    updatePaysByMonth()
  }, [startDate])

  // FUNCTIONS

  const openModalClient = () => {
    showModalClient(true)

  }
  const closeModalClients = () => {
    showModalClient(false)
    document.getElementById('client-form').reset()
    deleteErrors(true)
  }

  const openModalPay = () => {
    showModalPay(true)
  }
  const closeModalPay = () => {
    showModalPay(false)
    document.getElementById('pay-form').reset()
    deleteErrors(true)
  }

  const closeModalEditPay = () => {
    showModalEditPay(false)
    document.getElementById('pay-form').reset()
    deleteErrors(true)
  }

  const reloadPayList = async () => {
    try {
      showSpinner(true)
      const res = await axios.get(`${CLIENTS_BASE_URL}lista-pagos/${year}/${monthFormated}`)
      loadPaysList(res.data.data)
      showSpinner(false)

    } catch (error) {
      console.log(error)
      showSpinner(false)
    }
  }

  const editPay = (e) => {
    loadPayInfo(JSON.parse(e.target.value))
    showModalEditPay(true)
  }

  const openDeleteModal = (e) => {
    loadPayInfo(JSON.parse(e.target.value))
    showConfirmationModal(true)
  }

  const closeConfirmationModal = () => {
    showConfirmationModal(false)
  }

  const deletePay = async () => {
    try {
      showSpinner(true)
      closeConfirmationModal()
      await axios.delete(`${CLIENTS_BASE_URL}borrar-pago/${payInfo._id}/${payInfo.clientId}/${payInfo.beneficiaryId}`)
      await reloadPayList()
      showSpinner(false)

    } catch (error) {
      console.log(error)
      showSpinner(false)
    }
  }

  return (
    <div>
      <h1>Gestión de Clientes</h1>

      <ConfirmationModal 
        show = { confirmationModal }
        handleClose = { closeConfirmationModal }
        ask = { '¿Estás seguro de que quieres borrar el pago de este cliente?' }
        value = { payInfo.client && payInfo.client[0] }
        confirmBtn = { deletePay }/>

      <ClientModal 
        show = { modalClient }
        handleClose = { closeModalClients }
        deleteErrors = { errors }
        showSpinner = { showSpinner }
        { ...props }/>

      <PayModal 
        show = { modalPay }
        handleClose = { closeModalPay }
        deleteErrors = { errors }
        reloadPayList = { reloadPayList }
        showSpinner = { showSpinner }
        clientsList = { clientsList }
        adminsList = { adminsList }
        { ...props }/>

      <PayModal 
        show = { modalEditPay }
        handleClose = { closeModalEditPay }
        deleteErrors = { errors }
        reloadPayList = { reloadPayList }
        showSpinner = { showSpinner }
        clientsList = { clientsList }
        adminsList = { adminsList }
        payInfo = { payInfo }
        { ...props }/>

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
          <div className = "btns-container">
            <div className = "principal-button-container">
              <button className = "principal-button" onClick = { openModalPay }>Añadir Pago</button>
            </div>
            <div>
              <Link to = '/index'><button className = "logo-button"/></Link>
            </div>
            <div className = "aux-button-container">
              <button className = "aux-button" onClick = { openModalClient }>Nuevo Cliente</button>
            </div>
          </div>

          <div className = "payments-container">
            <h4>Estado Pagos { month } { year }</h4>

            <DatePicker 
              className = "form-input" 
              dateFormat="MM/yyyy"
              showMonthYearPicker
              showFullMonthYearPicker
              selected={ startDate } 
              onChange={ (date) => setStartDate(date) } 
              showPopperArrow={false}/>

            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Cliente</th>
                  <th>Estado</th>
                  <th>Método</th>
                  <th>Cantidad</th>
                  <th>Recibe</th>
                  <th>Notas</th>
                </tr>
              </thead>

              <tbody>
                {paysList.length > 0 && paysList.map((item, index) => (
                  <tr key = { item._id }>
                    <td>{ index + 1 }</td>
                    <td><Link to = { `/detalle-cliente/${item.clientId}` }>{ item.client[0] }</Link></td>
                    <td>{ item.status }</td>
                    <td>{ item.type }</td>
                    <td>{ item.price } €</td>
                    <td>{ item.beneficiary[0] }</td>
                    <td>{ item.information }</td>
                    <td><button onClick = { editPay } value = { JSON.stringify(item) }>Editar</button></td>
                    <td><button onClick = { openDeleteModal } value = { JSON.stringify(item) }>Borrar</button></td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div>
              <p>Total recaudación { month } { year }: <span>{ totalPayments }€</span></p>

              <h5>Reparto Pagos:</h5>
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Recibido</th>
                    <th>Objetivo</th>
                    <th>Diferencia</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Antonio</td>
                    <td>{ paymentsAntonio }</td>
                    <td>{ totalPayments * 0.25 }</td>
                    <td>{ paymentsAntonio - totalPayments * 0.25 }</td>
                  </tr>
                  <tr>
                    <td>Eduardo</td>
                    <td>{ paymentsEdu }</td>
                    <td>{ totalPayments * 0.45 }</td>
                    <td>{ paymentsEdu - totalPayments * 0.45 }</td>
                  </tr>
                  <tr>
                    <td>Víctor</td>
                    <td>{ paymentsVictor }</td>
                    <td>{ totalPayments * 0.3 }</td>
                    <td>{ paymentsVictor - totalPayments * 0.3 }</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      
      }
    </div>
  );
}
 
export default Clients;