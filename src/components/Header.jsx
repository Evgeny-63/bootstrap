import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import "../App.css"

const Header = () => {
  return (
    <div>
         <Navbar bg="danger" variant="danger">
        <Container>
          <Navbar.Brand> <Link to={'/'} class="text-warning fs-3 fst-italic fw-bolder">SmartShop</Link> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
                <Link to={'#1'}>
                      iPhone
                </Link>
            </Nav.Link>
            <Nav.Link> 
                <Link to={'#3'}>
                        Xiaomi
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to={'#5'}>
                      Samsung
                </Link>
             </Nav.Link>
             <Nav.Link>
                <Link to={'#7'}>
                      Realme
                </Link>
             </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary">
                    Войти
            </Button>
          </Nav>
        </Container>
      </Navbar>
  
      
    </div>
  )
}

export default Header