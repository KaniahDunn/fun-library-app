import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const BookSearch = ({ addBook }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const searchBooks = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
    const data = await response.json();
    setSearchResults(data.items || []);
    setShowResults(true);
  };

  const handleAddBook = (book) => {
    const newBook = {
      id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors
        ? book.volumeInfo.authors.join(", ")
        : "Unknown Author",
      genre: book.volumeInfo.categories
        ? book.volumeInfo.categories.join(", ")
        : "Unknown Genre",
      description: book.volumeInfo.description,
      image:
        book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail
          ? book.volumeInfo.imageLinks.smallThumbnail
          : null,
    };
    addBook(newBook);
    setQuery("");
    setSearchResults([]);
    setShowResults(false);
  };

  return (
    <Container gap={2} className='col-md-5 mx-auto'>
      <Form onSubmit={searchBooks} className='mb-4'>
        <Form.Group className='mb-3'>
          <Form.Control
            type='text'
            placeholder='Search for books'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
        <Button type='submit' variant='primary'>
          Search
        </Button>
      </Form>
      {showResults && (
        <div>
          {searchResults.map((book) => (
            <Card key={book.id} className='mb-3'>
              <Card.Body>
                {book.volumeInfo.imageLinks &&
                  book.volumeInfo.imageLinks.smallThumbnail && (
                    <Card.Img
                      variant='top'
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      alt={`${book.volumeInfo.title} cover`}
                    />
                  )}
                <Card.Title>{book.volumeInfo.title}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  Author:{" "}
                  {book.volumeInfo.authors
                    ? book.volumeInfo.authors.join(", ")
                    : "Unknown"}
                </Card.Subtitle>
                <Card.Text>
                  Genre:{" "}
                  {book.volumeInfo.categories
                    ? book.volumeInfo.categories.join(", ")
                    : "Unknown"}
                </Card.Text>
                <Button variant='success' onClick={() => handleAddBook(book)}>
                  Add to Library
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
};

export default BookSearch;
