import React, { Component } from 'react';

import * as api from '../../services/api';

import SearchBookBar from '../../components/SearchBookBar';
import SearchBookList from '../../components/SearchBookList';

export default class Search extends Component {
  state = {
    results: [],
    shelfTypes: ['currentlyReading', 'wantToRead', 'read'],
  };

  handleSearch = async (e) => {
    const results = await api.search(e.target.value);

    if (results && results.length > 0) {
      const booksInSearch = results.map((data) => {
        return {
          id: data.id,
          title: data.title,
          authors: data.authors,
          shelf: data.shelf,
          imageLinks: data.imageLinks,
        };
      });

      this.setState({
        results: [...booksInSearch],
      });
    } else {
      this.setState({
        results: [],
      });
    }
  };

  // Function used to update the shelf after select
  handleUpdateShelf = async (e, book) => {
    e.preventDefault();

    await api.update(book, e.target.value);

    // eslint-disable-next-line no-alert
    alert(`${book.title} is now on your shelf`);
  };

  render() {
    const { results, shelfTypes } = this.state;

    return (
      <>
        <SearchBookBar handleSearch={this.handleSearch} />
        <SearchBookList
          results={results}
          shelfTypes={shelfTypes}
          handleUpdateShelf={this.handleUpdateShelf}
        />
      </>
    );
  }
}
