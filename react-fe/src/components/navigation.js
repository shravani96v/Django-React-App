import React from 'react';
import './navigation.css';
import {Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import unh from '../unh.jpg'
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/"><Image src={unh} alt='Logo' thumbnail/></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/approver">Approver</Nav.Link>
        <Nav.Link href="/major">Major</Nav.Link>
        <Nav.Link href="/school">School</Nav.Link>
        <Nav.Link href="/transfer-course">Transfer Course</Nav.Link>
        <Nav.Link href="/major-req">Major Requirement</Nav.Link>
        <Nav.Link href="/transfer-eval">Transfer Evaluation</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
      </Navbar>
    );
}
 
export default Navigation;