import React from "react";
import * as BooksAPI from './BooksAPI';
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
      this.setState(() => ({
        books,
      }));
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Main books={this.state.books} />
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
