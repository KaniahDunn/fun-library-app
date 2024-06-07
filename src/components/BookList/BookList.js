import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Book from "../Book/Book";

const BookList = ({ books, removeBook }) => {
  const shelves = [];
  for (let i = 0; i < books.length; i += 5) {
    shelves.push(books.slice(i, i + 5));
  }

  return (
    <div>
      {shelves.map((shelf, index) => (
        <Row key={index} className='mb-4'>
          {shelf.map((book) => (
            <Col key={book.id} md={2}>
              <Book book={book} removeBook={removeBook} />
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default BookList;
