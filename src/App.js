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

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState(() => ({ books }));
  }

  updateBook = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    const bookIdx = this.state.books.findIndex((b) => b.id === book.id);
    const updatedBook = { ...book, shelf };

    const updatedBooks = bookIdx === -1 ? [...this.state.books, updatedBook] : [
      ...this.state.books.slice(0, bookIdx),
      updatedBook,
      ...this.state.books.slice(bookIdx + 1),
    ];

    this.setState(() => ({
      books: updatedBooks,
    }));
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/">
          <Main books={this.state.books} onUpdateBook={this.updateBook} />
        </Route>

        <Route path="/search">
          <Search books={this.state.books} onUpdateBook={this.updateBook} />
        </Route>
      </div>
    );
  }
}

export default BooksApp;
