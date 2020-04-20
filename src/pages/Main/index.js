import React, { Component } from 'react';

import Container from '../../components/Container';
import Header from '../../components/Header';
import BookShelf from '../../components/BookShelf';
import BookList from '../../components/BookList';
import OpenSearch from '../../components/OpenSearch';
import Loading from '../../components/Loading';

import * as api from '../../services/api';

export default class Main extends Component {
  state = {
    booksInShelf: [],
    shelfTypes: ['currentlyReading', 'wantToRead', 'read'],
    loading: false,
  };

  async componentDidMount() {
    this.loadState();
  }

  // Function used to update the shelf after select
  handleUpdateShelf = async (e, book) => {
    e.preventDefault();

    await api.update(book, e.target.value);

    this.loadState();
  };

  loadState = async () => {
    this.setState({
      loading: true,
    });

    // Retorna todos os livros que já estão em alguma estante
    const booksInApi = await api.getAll();

    const myBooks = booksInApi.map((data) => {
      return {
        id: data.id,
        title: data.title,
        authors: data.authors,
        shelf: data.shelf,
        imageLinks: data.imageLinks,
      };
    });

    this.setState({
      booksInShelf: [...myBooks],
      loading: false,
    });
  };

  render() {
    const { booksInShelf, shelfTypes, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

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
