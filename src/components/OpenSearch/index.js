import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function OpenSearch() {
  return (
    <Container>
      <div className="open-search">
        <Link to="/search">
          <button type="button">Add a book</button>
        </Link>
      </div>
    </Container>
  );
}
