import React, { useState } from "react";
import BookList from "../BookList/BookList";
import BookSearch from "../BookSearch/BookSearch";
import BookForm from "../BookForm/BookForm";

const Library = ({
  books,
  addBook,
  removeBook,
  searchResults,
  setSearchResults,
}) => {
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
      <BookForm addBook={addBook} />
      <BookSearch
        addBook={addBook}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <BookList
        books={bookList}
        removeBook={removeBook}
        updateBook={updateBook}
      />
    </div>
  );
};

export default Library;
