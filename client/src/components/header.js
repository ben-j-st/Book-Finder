import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron"

function Header() {

    return (
        <Jumbotron style={{
            marginTop: "20px",
            marginBottom: "20px"
        }}>
            <h1> (React) Google Books Search</h1>
            <h4>Search for and Save Books of Interest</h4>
        </Jumbotron>
    )
}

export default Header;