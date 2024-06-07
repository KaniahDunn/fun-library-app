import React from "react";
import BookForm from "../BookForm/BookForm";

const AddBook = ({ addBook }) => (
  <div>
    <h1>Add a New Book</h1>
    <BookForm addBook={addBook} />
  </div>
);

export default AddBook;
