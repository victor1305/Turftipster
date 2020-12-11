import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Unit from './Terminology/Unit'
import Bank from './Terminology/Bank'
import Stake from './Terminology/Stake'
import Yield from './Terminology/Yield'

import horseHeadImage from '../../images/horseHead.jpg'

import AOS from "aos";
import "aos/dist/aos.css"

const NextStep = () => {

    const [ terminology, updateTerminology ] = useState({})

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    const show = (e) => {

        e.preventDefault()

        updateTerminology({
            state: e.target.innerHTML
        })
    }


    return (
        <div className = "section-container" >
            <h1 className = "section-title" >Terminología</h1>
            <p className = "section-subtitle" id = "title">Si vas a empezar a apostar tanto a caballos como a cualquier deporte hay una serie de términos que debes tener claros: El bank, la unidad, el stake y el yield.</p>
            <Container>
                <Row>
                    <Col lg = {12} xl = {{ span: 6, order: 1}}>
                        <Container>
                            <Row>
                                <Col className = "terminology-container" >
                                    {terminology.state === "Bank" &&
                                    <div 
                                        data-aos="fade-down"
                                        data-aos-duration="1000">
                                    <Bank/>
                                    </div>
                                    }
                                    {terminology.state === "Unidad" &&
                                    <div
                                        data-aos="fade-down"
                                        data-aos-duration="1000"
                                    >
                                    <Unit/>
                                    </div>
                                    }
                                    {terminology.state === "Yield" &&
                                    <div
                                        data-aos="fade-down"
                                        data-aos-duration="1000"
                                    >
                                    <Yield/>
                                    </div>
                                    }
                                    {terminology.state === "Stake" &&
                                    <div
                                        data-aos="fade-down"
                                        data-aos-duration="1000"
                                    >
                                    <Stake/>
                                    </div>
                                    }
                                </Col>
                            </Row>
                            <Row className = "next-step-btn-container">
                                <Col xs = {12} sm = {6} md = {6} xl = {3} className = "btn-contaniner">
                                    <a href = "#title"><button className = "horse-race-btn" onClick = {show}>Bank</button></a>
                                </Col>
                                <Col xs = {12} sm = {6} md = {6} xl = {3} className = "btn-contaniner">
                                    <a href = "#title"><button className = "horse-race-btn" onClick = {show}>Unidad</button></a>
                                </Col>
                                <Col xs = {12} sm = {6} md = {6} xl = {3} className = "btn-contaniner">
                                    <a href = "#title"><button className = "horse-race-btn" onClick = {show}>Yield</button></a>
                                </Col>
                                <Col xs = {12} sm = {6} md = {6} xl = {3} className = "btn-contaniner">
                                    <a href = "#title"><button className = "horse-race-btn" onClick = {show}>Stake</button></a>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col lg = {12} xl = {{ span: 6, order: 2}} className = "items-container">
                        <img src = {horseHeadImage} alt = "caballo" className = "stats-image"/>   
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default NextStep;