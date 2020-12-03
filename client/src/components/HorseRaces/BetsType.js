import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Win from './BetsType/Win'
import Place from './BetsType/Place'
import Ordre from './BetsType/Ordre'
import Trio from './BetsType/Trio'
import WFav from './BetsType/WFav'
import Insure from './BetsType/Insure'

import horseChantilly from '../../images/jockeyCha.jpg'

const BetsType = () => {
    
    const [ betsType, updateBetsType ] = useState({
        state: ""
    })

    // When the user press a button

    const submitWin = () => {

        updateBetsType({
            state: "win"
        })
    }

    const submitPlace = () => {

        updateBetsType({
            state: "place"
        })
    }

    const submitOrdre = () => {

        updateBetsType({
            state: "ordre"
        })
    }

    const submitTrio = () => {

        updateBetsType({
            state: "trio"
        })
    }

    const submitWFav = () => {

        updateBetsType({
            state: "wfav"
        })
    }

    const submitInsure = () => {

        updateBetsType({
            state: "insure"
        })
    }

    return (
        <div className = "section-container">
            <h1 className = "section-title">Tipos de Apuestas</h1>
            <p className = "section-subtitle" id = "title">En las carreras de caballos tenemos varios tipos de apuestas, a continuación citaremos y explicaremos cada una de ellas:</p>
            <Container>
                <Row>
                    <Col lg = {12} xl = {{ span: 6, order: 1}}>
                        <Container>
                            <Row>
                                <Col className = "items-container">
                                    {betsType.state === "win" &&
                                    <Win/>
                                    }
                                    {betsType.state === "place" &&
                                    <Place/>
                                    }
                                    {betsType.state === "ordre" &&
                                    <Ordre/>
                                    }
                                    {betsType.state === "trio" &&
                                    <Trio/>
                                    }
                                    {betsType.state === "wfav" &&
                                    <WFav/>
                                    }
                                    {betsType.state === "insure" &&
                                    <Insure/>
                                    }
                                </Col>
                            </Row>
                            <Row className = "next-step-btn-container">
                                <Col xs = {6} sm = {6} md = {4} xl = {4} className = "btn-contaniner">
                                    <a href = "#title"><button className = "horse-race-btn" onClick = {submitWin}>Ganador</button></a>
                                </Col>
                                <Col xs = {6} sm = {6} md = {4} xl = {4} className = "btn-contaniner">
                                    <a href = "#title"><button className = "horse-race-btn" onClick = {submitPlace}>Colocado</button></a>
                                </Col>
                                <Col xs = {6} sm = {6} md = {4} xl = {4} className = "btn-contaniner">
                                    <a href = "#title"><button className = "horse-race-btn" onClick = {submitOrdre}>Gemela</button></a>
                                </Col>
                                <Col xs = {6} sm = {6} md = {4} xl = {4} className = "btn-contaniner">
                                    <a href = "#title"><button className = "horse-race-btn" onClick = {submitTrio}>Trio</button></a>
                                </Col>
                                <Col xs = {6} sm = {6} md = {4} xl = {4} className = "btn-contaniner">
                                    <a href = "#title"><button className = "horse-race-btn" onClick = {submitWFav}>Sin Fav</button></a>
                                </Col>
                                <Col xs = {6} sm = {6} md = {4} xl = {4} className = "btn-contaniner">
                                    <a href = "#title"><button className = "horse-race-btn" onClick = {submitInsure}>Seguro</button></a>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col lg = {12} xl = {{ span: 6, order: 2}} className = "items-container">
                        <img src = {horseChantilly} alt = "caballo" className = "stats-image"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default BetsType;