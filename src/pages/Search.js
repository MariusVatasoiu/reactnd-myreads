import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "../components/Book";
import { debounce } from "lodash-es";

class Search extends Component {
  state = {
    query: "",
    books: [],
  };

  search = debounce((query) => {
    BooksAPI.search(query).then((response) => {
      let books = response;
      // If server doesn't return a valid response
      if (!response || response.error) {
        books = [];
      }
      this.setState(() => ({
        books: books.map(this.checkBook),
      }));
    }).catch(() => {
      this.setState(() => ({ books: [] }));
    });
  }, 500);

  handleChange = (event) => {
    event.persist();
    const query = event.target.value;
    this.setState(() => ({ query }));

    if (query.length === 0) {
      this.setState(() => ({ books: [] }));
      return;
    }

    this.search(query);
  };

  checkBook = (book) => {
    const myBook = this.props.books.find((b) => b.id === book.id);
    return myBook
      ? { ...book, shelf: myBook.shelf }
      : { ...book, shelf: "none" };
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleChange}
              value={this.state.query}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  onUpdateBook={this.props.onUpdateBook}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
