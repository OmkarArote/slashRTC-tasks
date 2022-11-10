import React from "react";
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

class NAVBAR extends React.Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand>SlashRTC</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/'>FAQ</Link></Nav.Link>
                        <Nav.Link><Link to='/contact'>Contact</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default NAVBAR;