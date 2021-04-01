import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from '../Title.js';
import Book from '../components/Book.js';

class Main extends Component {
  render() {
    return (
      <div className="list-books">
        <Title />
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <Book />
                  </li>
                  <li>
                    <Book />
                  </li>
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <Book />
                  </li>
                  <li>
                    <Book />
                  </li>
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <Book />
                  </li>
                  <li>
                    <Book />
                  </li>
                  <li>
                    <Book />
                  </li>
                </ol>
              </div>
            </div>
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