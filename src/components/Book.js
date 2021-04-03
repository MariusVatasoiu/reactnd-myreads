import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  };

  state = {
    value: this.props.book.shelf,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.book.shelf !== this.props.book.shelf) {
      this.setState({
        value: this.props.book.shelf,
      });
    }
  }

  handleChange = (event) => {
    event.persist();
    this.setState(() => ({
      value: event.target.value,
    }));
    this.props.onUpdateBook(this.props.book, event.target.value);
  };

  render() {
    const { book } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${book.imageLinks &&
                book.imageLinks.thumbnail}")`,
            }}
          >
          </div>
          <div className="book-shelf-changer">
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {Array.isArray(book.authors) && book.authors.join(", ")}
        </div>
      </div>
    );
  }
}

export default Book;
