import React from "react";
import Book from "../components/Book.js";
import PropTypes from "prop-types";

function Bookshelf({ category, books, onUpdateBook }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{category.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} onUpdateBook={onUpdateBook} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

Bookshelf.propTypes = {
  category: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default Bookshelf;
