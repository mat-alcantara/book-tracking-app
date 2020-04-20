import React from 'react';

import PropTypes from 'prop-types';

import { ContainerStyle } from './styles';

export default function Container({ children }) {
  return <ContainerStyle>{children}</ContainerStyle>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
