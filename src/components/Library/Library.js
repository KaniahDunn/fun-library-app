import React, { useState } from "react";
import BookList from "../BookList/BookList";

const Library = ({ books, removeBook }) => {
  const [bookList, setBookList] = useState(books);

  const updateBook = (id, updatedDetails) => {
    setBookList(
      bookList.map((book) =>
        book.id === id ? { ...book, ...updatedDetails } : book
      )
    );
  };

  return (
    <div>
      <BookList
        books={bookList}
        removeBook={removeBook}
        updateBook={updateBook}
      />
    </div>
  );
};

export default Library;
