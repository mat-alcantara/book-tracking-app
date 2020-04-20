import React, { Component } from 'react';

import SearchBookBar from '../../components/SearchBookBar';

export default class Search extends Component {
  state = {};

  render() {
    return (
      <>
        <SearchBookBar />
        <div className="search-books">
          <div className="search-books-results">
            <ol className="books-grid" />
          </div>
        </div>
      </>
    );
  }
}
