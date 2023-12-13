// import React from "react";
import { Link } from 'react-router-dom'
import '../../../../App.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                        width={100}
                        src="https://www.kocca.kr/trend/vol30/img/s11/img_1.jpg"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/" className="nav-item">
                            Home
                        </Link>
                        <Link to="/movies/favorite" className="nav-item">
                            favorite
                        </Link>

                        <Link to="/home/atomic" className="nav-item">
                            Home (Atomic)
                        </Link>
                        <Link to="/movies/favorite/atomic" className="nav-item">
                            favorite (Atomic)
                        </Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-danger">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header