import React, { Component } from "react";
import Book from "../components/Book.js";

class Bookshelf extends Component {
  render() {
    const { category, books, onUpdateBook } = this.props;
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
}

export default Bookshelf;
