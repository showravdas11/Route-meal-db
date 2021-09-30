import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbars.css'
// import Navbar from 'react-bootstrap'

const Navbars = () => {
    return (
        <Navbar className="nav-bg" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto navbar">
                        <Link className="me-4 item" to="/home">Home</Link>
                        <Link className="me-4 item" to="/menu">Our-Menu</Link>
                        <Link className="me-4 item" to="/about">About</Link>
                        <Link className=" me-4 item" to="/quote">Quotes</Link>
                        {/* <Link className="item" to="/res">Restaueant</Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navbars;