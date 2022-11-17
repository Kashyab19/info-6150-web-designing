import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import Cards from '../components/CareersCards';

const Careers = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Assignment 9</Navbar.Brand>
                    <Nav className="me-auto">
                    <LinkContainer to="/landing">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    </Nav>
            </Navbar>
             <div className="container">
             {   
                    Cards.map((c) =>{
                        return(
                            <Card style={{ margin:'10px' ,width: '20rem' }}>
                                <Card.Body>
                                    <Card.Title>{c.cardTitle}</Card.Title>
                                    <Card.Text>{c.cardText}</Card.Text>
                                    <Button variant="primary">{c.buttonText}</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>  
  
        </>
    );
  };

  export default Careers;