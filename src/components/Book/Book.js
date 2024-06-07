import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Book.css';

const Book = ({ book, removeBook }) => (
  <Card>
    <Card.Body>
      <Button
        variant="outline-danger"
        size="sm"
        className="close"
        onClick={() => removeBook(book.id)}
      >
        &times;
      </Button>
      <Card.Img variant="top" src={book.image} />
      <Card.Title>{book.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Author: {book.author}</Card.Subtitle>
      <Card.Text>Genre: {book.genre}</Card.Text>
    </Card.Body>
  </Card>
);

export default Book;
