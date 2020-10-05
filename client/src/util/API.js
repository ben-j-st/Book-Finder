import axios from "axios";

// performing a volume search using Google Books API
// https://developers.google.com/books/docs/v1/using
const BaseUrl = "https://www.googleapis.com/books/v1/volumes?q="

export default {
  // Gets all books
  getBooks: () => {
    return axios.get("/api/books");
  },
  // Gets the book based on user search
  getBook: (query) => {
    return axios.get(BaseUrl + query);
  },
  // Deletes the book with the given id
  deleteBook: (id) => {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: (bookData) => {
    return axios.post("/api/books", bookData);
  }
};