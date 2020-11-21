import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import Unit from './Terminology/Unit'
import Bank from './Terminology/Bank'
import Stake from './Terminology/Stake'
import Yield from './Terminology/Yield'

const NextStep = () => {

    const [ terminology, updateTerminology ] = useState({
        state: ""
    })

    const showBank = () => {
        updateTerminology({
            state: "bank"
        })
    }

    const showUnit = () => {
        updateTerminology({
            state: "unit"
        })
    }

    const showStake = () => {
        updateTerminology({
            state: "stake"
        })
    }

    const showYield = () => {
        updateTerminology({
            state: "yield"
        })
    }

    return (
        <div className = "section-container">
            <h1 className = "section-title">Terminología</h1>
            <p className = "section-subtitle">Si vas a empezar a apostar tanto a caballos como a cualquier deporte hay una serie de términos que debes tener claros: El bank, la unidad, el stake y el yield.</p>
            <Container>
                <Row>
                    <Col sm = {12} md = {{ span: 6, order: 2}} className = "items-container">
                        {terminology.state === "bank" &&
                        <Bank/>
                        }
                        {terminology.state === "unit" &&
                        <Unit/>
                        }
                        {terminology.state === "yield" &&
                        <Yield/>
                        }
                        {terminology.state === "stake" &&
                        <Stake/>
                        }
                    </Col>
                    <Col sm = {12} md = {{ span: 6, order: 1}}>
                        <Container>
                            <Row>
                                <Col md = {12} xl = {12} className = "btn-contaniner">
                                    <Button 
                                        variant = "dark" 
                                        onClick = {showBank}
                                        className = "bg-transparent"
                                    >Bank</Button>
                                </Col>
                                <Col md = {12} xl = {12}  className = "btn-contaniner">
                                    <Button 
                                        variant = "dark" 
                                        onClick = {showUnit}
                                    >Unidad</Button>
                                </Col>
                                <Col md = {12} xl = {12}  className = "btn-contaniner">
                                    <Button 
                                        variant = "dark" 
                                        onClick = {showStake}
                                    >Stake</Button>
                                </Col>
                                <Col md = {12} xl = {12}  className = "btn-contaniner">
                                    <Button 
                                        variant = "dark" 
                                        onClick = {showYield}
                                    >Yield</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default NextStep;