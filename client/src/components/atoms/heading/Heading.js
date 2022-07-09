import React from 'react';
import PropTypes from 'prop-types';

function Heading({ children, level }, ...props) {
  return React.createElement(`h${level}`, ...props, children);
}

Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.string,
};

Heading.defaultProps = {
  children: React.createElement('div'),
  level: '5',
};

export default Heading;
