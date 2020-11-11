import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {

    const linkStyle = {
        paddingRight: '1em'
    };
 
    return (
        <Navbar className = "header" collapseOnSelect expand="lg" variant ="dark">
        <Navbar.Brand className = "brand" href="/">TurfTipster</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link style = {linkStyle} href="/quienes-somos">Quiénes Somos</Nav.Link>
            <Nav.Link style = {linkStyle} href="/tipos-de-apuestas">Tipos de Apuestas</Nav.Link>
            <Nav.Link style = {linkStyle} href="/stats">Nuestras Stats</Nav.Link>
            <Nav.Link style = {linkStyle} href="/apuestas">Apuestas</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#deets">Iniciar Sesión</Nav.Link>
                <Nav.Link href="#memes">Registro</Nav.Link>
                <Nav.Link href="#memes">Cerrar Sesión</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        
    );
}
 
export default NavBar;