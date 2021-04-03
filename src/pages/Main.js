import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "../Title.js";
import Bookshelf from "../components/Bookshelf.js";
import PropTypes from "prop-types";

class Main extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
  };

  categories = [
    { shelf: "currentlyReading", title: "Currently Reading" },
    { shelf: "wantToRead", title: "Want To Read" },
    { shelf: "read", title: "Read" },
  ];

  render() {
    const { books, onUpdateBook } = this.props;
    return (
      <div className="list-books">
        <Title />
        <div className="list-books-content">
          <div>
            {this.categories.map((category) => (
              <Bookshelf
                key={category.shelf}
                category={category}
                books={books.filter((b) => b.shelf === category.shelf)}
                onUpdateBook={onUpdateBook}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
