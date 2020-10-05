import React from "react";

import API from "../util/API";
import DBContainer from "../components/dbContainer"

import Jumbotron from "react-bootstrap/Jumbotron";

function SavedPage() {

    const [ dbBooks, setDBBooks] = React.useState([])

    React.useEffect(() => {
        API.getBooks()
        .then(res => {
            // console.log(res.data)
            setDBBooks(res.data)
        })
        .catch(err => console.error(err))
    },[])

    

    return (
        <div>
            {dbBooks.length ?  (
            <Jumbotron>
                <h4 style={{ textAlign: "left"}}>Saved Books</h4>
                {dbBooks.map((book) => (
                    <DBContainer
                        key={book._id}
                        id={book._id}
                        title={book.title}
                        authors={book.authors.length > 1 ? `Authors: ${book.authors}` : `Author: ${book.authors}`}
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

export default SavedPage;