import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Library from "./components/Library/Library";
import AddBook from "./components/AddBook/AddBook";
import "./App.css";
import BookSearch from "./components/BookSearch/BookSearch";
import BookDetail from "./components/BookDetail/BookDetail";

const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "1984", author: "George Orwell", genre: "Dystopian" },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
    },
  ]);
  const [searchResults, setSearchResults] = useState([]);

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const removeBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <Router>
      <Container className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/library'
            element={
              <Library
                books={books}
                addBook={addBook}
                removeBook={removeBook}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
              />
            }
          />
          <Route path='/add-book' element={<AddBook addBook={addBook} />} />
          <Route
            path='/search'
            element={
              <BookSearch
                addBook={addBook}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
              />
            }
          ></Route>
          <Route path='/book/:id' element={<BookDetail books={books} />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
