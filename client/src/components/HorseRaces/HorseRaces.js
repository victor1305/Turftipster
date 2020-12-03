import React, { Fragment, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import startImage from '../../images/start.jpg'
import nextStepImage from '../../images/nextstep.jpg'
import finishImage from '../../images/finish.jpg'
import Start from './Start';
import NextStep from './NextStep';
import BetsType from './BetsType'

const HorseRaces = () => {

    const [ horseRacesState, updateHorseRacesState ] = useState({
        state: ""
    })

    const start = () => {
        updateHorseRacesState({
            state: "start"
        })
    }

    const nextStep = () => {
        updateHorseRacesState({
            state: "next"
        })
    }

    const betsType = () => {
        updateHorseRacesState({
            state: "bets"
        })
    }

    return (
        <Fragment>
            {!horseRacesState.state &&
            <div className = "horseRaces-title-container">
                    <h2>¿Eres nuevo en el mundo de las Carreras de Caballos?</h2>
                    <p>En esta sección encontraras todo lo necesario para iniciarte.</p>
            </div>
            }
            {!horseRacesState.state &&
            <Container>
                <Row className = "horse-races-first-section">
                    <Col sm = {12} md = {{span: 6, order: 1}} className = "horse-races-image-container">
                        <img className = "horse-races-first-image" src = {startImage} alt = "start"/>
                    </Col>
                    <Col sm = {12} md = {{span: 6, order: 2}}>
                        <div className = "horse-races-text-container">
                            <h3>Lo que debes saber antes de empezar.</h3>
                            {/* <Button variant = "dark" onClick = {start}>Ir a la página</Button> */}
                            <button className = "horse-race-btn" onClick = {start}><span>Leer más</span></button>
                        </div>
                    </Col>
                </Row>
                <Row className = "horse-races-section">
                    <Col sm = {12} md = {{span: 6, order: 2}} className = "horse-races-image-container">
                        <img className = "horse-races-first-image" src = {nextStepImage} alt = "Siguiente-paso"/>
                    </Col> 
                    <Col sm = {12} md = {{span: 6, order: 1}}>
                        <div className = "horse-races-text-container">
                            <h3>El bank, la unidad, el stake y el yield.</h3>
                            <button className = "horse-race-btn" onClick = {nextStep}><span>Leer más</span></button>
                        </div>
                    </Col>    
                </Row>
                <Row className = "horse-races-section">
                    <Col sm = {12} md = {{span: 6, order: 1}} className = "horse-races-image-container">
                        <img className = "horse-races-first-image" src = {finishImage} alt = "Caballo-carreras"/>
                    </Col>
                    <Col sm = {12} md = {{span: 6, order: 2}}>
                        <div className = "horse-races-text-container">
                            <h3>Tipos de apuestas</h3>
                            <button className = "horse-race-btn" onClick = {betsType}><span>Leer más</span></button>
                        </div>
                    </Col>
                </Row>
            </Container>
            }

            {horseRacesState.state === "start" &&
            <Start/>
            }
            
            {horseRacesState.state === "next" &&
            <NextStep/>
            }

            {horseRacesState.state === "bets" &&
            <BetsType/>
            }
        </Fragment>
    );
}
 
export default HorseRaces;