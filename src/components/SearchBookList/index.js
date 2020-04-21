// TODO: PropTypes
// TODO: List all books
// TODO: Implement interactivity

import React from 'react';
import PropTypes from 'prop-types';

import updateType from '../../util/updateType';

import { Container } from './styles';

export default function SearchBookList({
  results,
  shelfTypes,
  handleUpdateShelf,
}) {
  if (!(results.length > 0) || !results) {
    return <> </>;
  }

  return (
    <Container className="search-books">
      <div className="search-books-results">
        <ol className="books-grid">
          {results.map((book) => (
            // Create the book list through a loop
            <li key={book.id}>
              {/* Book Thumbnail */}
              <img src={book.imageLinks.thumbnail} alt="Thumbnail" />

              {/* Menu onClick to change shelves */}
              <div className="book-shelf-changer">
                {/* defaultValue is used instead of selected */}
                <select
                  onClick={(e) => handleUpdateShelf(e, book)}
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
              <small>{book.authors ? book.authors[0] : null}</small>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  );
}

SearchBookList.propTypes = {
  results: PropTypes.arrayOf(
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
  ),
  shelfTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleUpdateShelf: PropTypes.func.isRequired,
};

SearchBookList.defaultProps = {
  results: [],
};
