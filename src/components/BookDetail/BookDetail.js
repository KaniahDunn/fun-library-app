import React from "react";
import { useParams } from "react-router-dom";

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const book = books.find((book) => book.id === id);

  if (!book) {
    return <div> Book Not Found </div>;
  }
  return (
    <div>
      <h2>{book.title}</h2>
      <p>Description: {book.description}</p>
      <p>Rating: {book.rating}</p>
      <p>Reviews: {book.reviews}</p>
    </div>
  );
};

export default BookDetail;
