import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

import updateType from '../../util/updateType';

export default function BookShelf({ type, children }) {
  return (
    <Container>
      <div className="line1" />
      <h1>{updateType(type)}</h1>
      <div className="line2" />
      {children}
    </Container>
  );
}

BookShelf.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
