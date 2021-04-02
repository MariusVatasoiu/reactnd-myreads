import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState(() => ({ books }));
    });
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      const bookIdx = this.state.books.findIndex((b) => b.id === book.id);
      const updatedBook = { ...book, shelf };
      
      this.setState((currentState) => ({
        books: [
          ...currentState.books.slice(0, bookIdx),
          updatedBook,
          ...currentState.books.slice(bookIdx + 1),
        ],
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Main books={this.state.books} onUpdateBook={this.updateBook} />
          )}
        />

        <Route
          path="/search"
          render={() => (
            <Search />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
