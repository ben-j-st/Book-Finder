import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav } from "react-bootstrap/"

import { Link } from "react-router-dom";

const style = {
    textDecoration: "none",
    color: "black",
    paddingRight: "10px",
}
function nav() {
    
    
    return(
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Google Books</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/" style={style} >Search</Link>
                <Link to="/saved" style={style}>Saved</Link>
            </Nav>
        </Navbar>
    )
}


                
    
    export default nav;

 