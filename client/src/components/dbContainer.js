import React from "react"

import API from "../util/API"

import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button"



function DBContainer(props) {

    const handleDelete = () => {
        API.deleteBook(props.id)
        .then(console.log(`Removed ${props.title}`))
        .catch(err => console.error(err))
    }

    return (
        <div style={{
            marginBottom: "20px"
        }}>
            <Row>
                <Col>
                    <h4>{props.title}</h4>
                    <p>Author/s: {[props.authors].flat().join(", ")}</p>
                </Col>
                <Col>
                    <Button
                        style={{
                            marginRight:"10px"
                        }} 
                        href={props.link}
                        target="_blank"
                    >View</Button>
                    <Button
                    onClick={handleDelete}
                    >Delete</Button>
                </Col>
            </Row>
            <Row>
                <Col><img src={props.image} alt={props.title} /></Col>
                <Col><p>{props.description}</p></Col>
            </Row>
        </div>
    )
}


export default DBContainer;