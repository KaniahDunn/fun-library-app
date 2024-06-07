import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ id: Date.now(), title, author, genre });
    setTitle("");
    setAuthor("");
    setGenre("");
  };

  return (
    <Form onSubmit={handleSubmit} className='mb-4'>
      <Form.Group>
        <Form.Control
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type='text'
          placeholder='Author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type='text'
          placeholder='Genre'
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </Form.Group>
      <Button type='submit' variant='primary'>
        Add Book
      </Button>
    </Form>
  );
};

export default BookForm;
