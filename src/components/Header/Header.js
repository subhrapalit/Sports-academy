import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (

        //Navbar section
        <Navbar bg="light" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mx-auto">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/coaches">Coaches</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;