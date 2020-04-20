import React, { Component } from 'react';

import Container from '../../components/Container';
import Header from '../../components/Header';
import BookShelf from '../../components/BookShelf';
import BookList from '../../components/BookList';
import OpenSearch from '../../components/OpenSearch';

import * as api from '../../services/api';

export default class Main extends Component {
  state = {
    booksInShelf: [],
    shelfTypes: ['currentlyReading', 'wantToRead', 'read'],
  };

  async componentDidMount() {
    // Retorna todos os livros que já estão em alguma estante
    const myBooks = await api.getAll();

    // id
    // Title (string)
    // authors (array)
    // shelf (string)
    // imageLinks (array with smallthumbnail and thumbnail)

    myBooks.map((data) =>
      this.setState((prevState) => ({
        booksInShelf: [
          ...prevState.booksInShelf,
          {
            id: data.id,
            title: data.title,
            authors: data.authors,
            shelf: data.shelf,
            imageLinks: data.imageLinks,
          },
        ],
      }))
    );
  }

  // Function used to update the shelf after select
  handleUpdateShelf = (e, id) => {
    // TODO: Use prevState to change the state
    e.preventDefault();

    const { booksInShelf } = this.state;

    const bookToChange = booksInShelf.filter(
      (bookFilter) => bookFilter.id === id
    );
    bookToChange[0].shelf = e.target.value;

    this.setState({
      booksInShelf: [
        ...booksInShelf.filter((bookFilter) => bookFilter.id !== id),
        bookToChange[0],
      ],
    });
  };

  render() {
    const { booksInShelf, shelfTypes } = this.state;

    return (
      <Container>
        <Header />
        {/* It'll loop in the three types of shelfs */}
        {shelfTypes.map((type) => (
          <BookShelf type={type} key={type}>
            <BookList
              books={booksInShelf.filter((book) => book.shelf === type)}
              shelfTypes={shelfTypes}
              handleUpdateShelf={this.handleUpdateShelf}
            />
          </BookShelf>
        ))}
        <OpenSearch />
      </Container>
    );
  }
}
