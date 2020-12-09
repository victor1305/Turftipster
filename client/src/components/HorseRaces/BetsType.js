import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Win from './BetsType/Win'
import Place from './BetsType/Place'
import Ordre from './BetsType/Ordre'
import Trio from './BetsType/Trio'
import WFav from './BetsType/WFav'
import Insure from './BetsType/Insure'

import horseChantilly from '../../images/jockeyCha.jpg'

import AOS from "aos";
import "aos/dist/aos.css"

const BetsType = () => {
    
    const [ betsType, updateBetsType ] = useState({})

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    // When the user press a button

    const submit = (e) => {

        e.preventDefault()
        updateBetsType({
            state: e.target.value
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
                                    <div data-aos="zoom-in">
                                        <Win/>
                                    </div>    
                                    }
                                    {betsType.state === "place" &&
                                    <div data-aos="zoom-in">
                                        <Place/>
                                    </div>
                                    }
                                    {betsType.state === "ordre" &&
                                    <div data-aos="zoom-in">
                                        <Ordre/>
                                    </div>
                                    }
                                    {betsType.state === "trio" &&
                                    <div data-aos="zoom-in">
                                        <Trio/>
                                    </div>
                                    }
                                    {betsType.state === "wfav" &&
                                    <div data-aos="zoom-in">
                                        <WFav/>
                                    </div>
                                    }
                                    {betsType.state === "insure" &&
                                    <div data-aos="zoom-in">
                                        <Insure/>
                                    </div>
                                    }
                                </Col>
                            </Row>
                            <Row className = "next-step-btn-container">
                                <Col xs = {6} sm = {6} md = {4} xl = {4} className = "btn-contaniner">
                                    <a href = "#title"><button className = "horse-race-btn" value = "win" onClick = {submit}>Ganador</button></a>
                                </Col>
                                <Col xs = {6} sm = {6} md = {4} xl = {4} className = "btn-contaniner">
                                    <a href = "#title"><button className = "horse-race-btn" value = "place" onClick = {submit}>Colocado</button></a>
                                </Col>
                                <Col xs = {6} sm = {6} md = {4} xl = {4} className = "btn-contaniner">
                                    <a href = "#title"><button className = "horse-race-btn" value = "ordre" onClick = {submit}>Gemela</button></a>
                                </Col>
                                <Col xs = {6} sm = {6} md = {4} xl = {4} className = "btn-contaniner">
                                    <a href = "#title"><button className = "horse-race-btn" value = "trio" onClick = {submit}>Trio</button></a>
                                </Col>
                                <Col xs = {6} sm = {6} md = {4} xl = {4} className = "btn-contaniner">
                                    <a href = "#title"><button className = "horse-race-btn" value = "wfav" onClick = {submit}>Sin Fav</button></a>
                                </Col>
                                <Col xs = {6} sm = {6} md = {4} xl = {4} className = "btn-contaniner">
                                    <a href = "#title"><button className = "horse-race-btn" value = "insure" onClick = {submit}>Seguro</button></a>
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