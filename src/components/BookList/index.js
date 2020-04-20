import React from 'react';

import PropTypes from 'prop-types';
import updateType from '../../util/updateType';

import { Container } from './styles';

export default function BookList({ books, shelfTypes, handleUpdateShelf }) {
  return (
    <Container>
      {books.map((book) => (
        // Create the book list through a loop
        <li key={book.id}>
          {/* Book Thumbnail */}
          <img src={book.imageLinks.smallThumbnail} alt="Small Thumbnail" />

          {/* Menu onClick to change shelves */}
          <div className="book-shelf-changer">
            {/* defaultValue is used instead of selected */}
            <select
              onClick={(e) => handleUpdateShelf(e, book.id)}
              defaultValue={book.shelf}
            >
              <option value="move" disabled>
                Move to...
              </option>
              {shelfTypes.map((shelf) => (
                <option key={shelf} value={shelf}>
                  {updateType(shelf)}
                </option>
              ))}
            </select>
          </div>

          {/* Book details */}
          <h2>{book.title}</h2>
          <small>{book.authors[0]}</small>
        </li>
      ))}
    </Container>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string).isRequired,
      shelf: PropTypes.string.isRequired,
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
  shelfTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleUpdateShelf: PropTypes.func.isRequired,
};
