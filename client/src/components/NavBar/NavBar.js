import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import AuthService from '../../service/AuthService';

const NavBar = (props) => {

    const authService = new AuthService()

    const linkStyle = {
        paddingRight: '1em'
    };

    const logout = () => {
        
        authService
          .logout()
          .then(() => {
            props.setTheUser(false)
          })
          .catch(err => console.log(err))
    }
 
    return (
        <Navbar className = "header" collapseOnSelect expand="lg" variant ="dark">
        <Navbar.Brand className = "brand" href="/">TurfTipster</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link style = {linkStyle} href="/quienes-somos">Quiénes Somos</Nav.Link>
            <Nav.Link style = {linkStyle} href="/carreras-de-caballos">Carreras de Caballos</Nav.Link>
            <Nav.Link style = {linkStyle} href="/stats">Nuestras Stats</Nav.Link>
            
            <Nav.Link style = {linkStyle} href="/apuestas">Apuestas</Nav.Link>
            
            </Nav>
            {props.loggedInUser ?
            <Nav>
            <Nav.Link href = "/" onClick = {logout} >Cerrar Sesión</Nav.Link>
            </Nav>
            :
            <Nav>
            <Nav.Link href = "/iniciar-sesion">Iniciar Sesión</Nav.Link>
            <Nav.Link href = "/registro">Registro</Nav.Link>
            </Nav>
            }
        </Navbar.Collapse>
        </Navbar>
        
    );
}
 
export default NavBar;