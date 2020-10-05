import React from "react"

import API from "../util/API"

import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button"

function ResultContainer(props) {

    const handleSave = () => {
        API.saveBook({
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link
        })
        .then(console.log("successfully added a book"))
        .catch(
            err => console.error(err)
        )
    } 

    return(
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
                            marginLeft:"10px"
                        }} 
                        href={props.link}
                        target="_blank"
                    >View</Button>
                    <Button
                    onClick={handleSave}
                    >Save</Button>
                </Col>
            </Row>
            <Row>
                <Col><img src={props.image} alt={props.title} /></Col>
                <Col><p>{props.description}</p></Col>
            </Row>
        </div>
    )
}

export default ResultContainer;

