import React from "react"

import API from "../util/API"

import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

function ResultContainer(props) {

    const handleClick = () => {
        API.saveBook({
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link
        }).catch(
            err => console.error(err)
        )
    } 

    return(
        <Container>
            <Row>
                <Col>
                    <h4>{props.title}</h4>
                    <p>Author/s: {[props.authors].flat().join(", ")}</p>
                </Col>
                <Col><Button 
                    href={props.link}
                    target="_blank"
                    >View</Button></Col>
                <Col><Button
                    onClick={handleClick()}
                >Save</Button></Col>
            </Row>
            <Row>
                <Col><img src={props.image} alt={props.title} /></Col>
                <Col><p>{props.description}</p></Col>
            </Row>
        </Container>
    )
}

export default ResultContainer;

