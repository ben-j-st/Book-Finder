import { React, useState } from "react";

import ResultContainer from "../components/resultContainer";

import Jumbotron from "react-bootstrap/Jumbotron";
import { Form, FormControl } from "react-bootstrap/";
import Button from "react-bootstrap/Button"


function SearchPage() {

    const [ books, setBooks] = useState([])

        return(
            <div>  
                <Jumbotron>
                    <h4>Book Search</h4>

                    <Form inline>
                        <FormControl type="text" placeholder="Please Enter A Book Title" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>

                </Jumbotron>

                {books.length ?  (
                    <Jumbotron>
                        <h4>Results</h4>
                        {books.map((book) => (
                            <ResultContainer 
                                title={book.title}
                                authors={book.authors}
                                description={book.description}
                                image={book.image}
                                link={book.link}
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