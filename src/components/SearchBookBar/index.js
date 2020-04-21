import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function SearchBookBar({ handleSearch }) {
  return (
    <Container>
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search" type="button">
            Close
          </button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </div>
    </Container>
  );
}

SearchBookBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
