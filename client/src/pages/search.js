import React from "react";

import ResultContainer from "../components/resultContainer";

import Jumbotron from "react-bootstrap/Jumbotron";
import { Form } from "react-bootstrap/";
import Button from "react-bootstrap/Button"
import API from "../util/API";


function SearchPage() {

    const [ books, setBooks] = React.useState([])
    const [ input, setInput ] = React.useState('')

    const runSearch = event => {
        event.preventDefault();
        API.searchBooks(input)
        .then(res => {
            console.log(res.data.items)
            setBooks(res.data.items)
        })
    }

    return (
        <div>  
            <Jumbotron>
                <h4 style={{ textAlign:"left"}}>Book Search</h4>

                <Form.Group 
                    style={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}>
                    <Form.Control 
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)} 
                        placeholder="Please Enter A Book Title" 
                    />
                    <Button 
                        style={{
                            marginLeft: "5px"
                        }}
                        className="text-right"
                        variant="outline-primary"
                        onClick={runSearch}
                    >Search</Button>
                </Form.Group>

            </Jumbotron>

            {books.length ?  (
                <Jumbotron>
                    <h4 style={{ textAlign: "left"}}>Results</h4>
                    {books.map((book) => (
                        <ResultContainer
                            key={book.id} 
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            link={book.volumeInfo.previewLink}
                        />
                    ))}
                </Jumbotron>
            ) : (
                <h4>No Books to Display</h4>
            )}
            
        </div>
    )
}

export default SearchPage;