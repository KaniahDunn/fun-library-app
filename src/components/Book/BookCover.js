import React, { useState, useEffect } from 'react';

const BookCover = ({ bookId }) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      .then(response => response.json())
      .then(data => setBook(data));
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{book.volumeInfo.title}</h2>
      {book.volumeInfo.imageLinks && (
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={`${book.volumeInfo.title} cover`} />
      )}
    </div>
  );
};

export default BookCover;
