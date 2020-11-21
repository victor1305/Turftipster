import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

import Win from './BetsType/Win'
import Place from './BetsType/Place'
import Ordre from './BetsType/Ordre'
import Trio from './BetsType/Trio'
import WFav from './BetsType/WFav'
import Insure from './BetsType/Insure'

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
            <p className = "section-subtitle">En las carreras de caballos tenemos varios tipos de apuestas, a continuación citaremos y explicaremos cada una de ellas:</p>
            <Container>
                <Row>
                    <Col sm = {12} md = {{ span: 6, order: 2}}>
                        <div className = "items-container">
                            {!betsType.state && 
                            <Win/>
                            }
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
                        </div>
                    </Col>
                    <Col sm = {12} md = {{ span: 6, order: 1}}>
                        <Container>
                            <Row>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button
                                        onClick = {submitWin}
                                    >Ganador</Button>
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button
                                        onClick = {submitPlace}
                                    >Colocado</Button>
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button
                                        onClick = {submitOrdre}
                                    >Gemela</Button>
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button
                                        onClick = {submitTrio}
                                    >Trio</Button>
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button
                                        onClick = {submitWFav}
                                    >Ganador Sin Favorito</Button>
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button
                                        onClick = {submitInsure}
                                    >Ganador con Seguro</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default BetsType;