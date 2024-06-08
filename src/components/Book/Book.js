import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Book.css";

const Book = ({ book, removeBook, updateBook }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(book.title);
  const [editedAuthor, setEditedAuthor] = useState(book.author);

  const handleSave = () => {
    updateBook(book.id, { title: editedTitle, author: editedAuthor });
    setIsEditing(false);
  };

  return (
    <Card>
      <Card.Body>
        <Button
          variant='outline-danger'
          size='sm'
          className='close'
          onClick={() => removeBook(book.id)}
        >
          &times;
        </Button>
        <Card.Img variant='top' src={book.image} />
        {isEditing ? (
          <div>
            <Form.Group>
              <Form.Control
                type='text'
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                placeholder='Edit title'
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='text'
                value={editedAuthor}
                onChange={(e) => setEditedAuthor(e.target.value)}
                placeholder='Edit author'
              />
            </Form.Group>
            <Button variant='success' onClick={handleSave}>
              Save
            </Button>
          </div>
        ) : (
          <div>
            <Link to={`/book/${book.id}`}>
              <Card.Title>{book.title}</Card.Title>
            </Link>
            <Card.Subtitle className='mb-2 text-muted'>
              Author: {book.author}
            </Card.Subtitle>
            <Button
              variant='outline-primary'
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>
          </div>
        )}
        <Card.Text>Genre: {book.genre}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Book;
