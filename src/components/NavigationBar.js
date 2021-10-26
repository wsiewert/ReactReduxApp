import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar className="nav-gradient" bg="light" expand="lg">
        <Navbar.Brand href="/">Online React-Redux Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Cart - TODO: add cart svg</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default NavigationBar
