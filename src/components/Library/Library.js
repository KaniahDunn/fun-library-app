import React from "react";
import BookList from "../BookList/BookList";
import BookSearch from "../BookSearch/BookSearch";
import BookForm from "../BookForm/BookForm";

const Library = ({
  books,
  addBook,
  removeBook,
  searchResults,
  setSearchResults,
}) => (
  <div>
    <BookForm addBook={addBook} />
    <BookSearch
      addBook={addBook}
      searchResults={searchResults}
      setSearchResults={setSearchResults}
    />
    <BookList books={books} removeBook={removeBook} />
  </div>
);

export default Library;
