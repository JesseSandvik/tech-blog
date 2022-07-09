import React from 'react';
import PropTypes from 'prop-types';

function List({ children, ordered }, ...props) {
  const listType = ordered ? 'ol' : 'ul';

  return React.createElement(listType, ...props, children);
}

List.propTypes = {
  children: PropTypes.node,
  ordered: PropTypes.bool,
};

List.defaultProps = {
  children: React.createElement('div'),
  ordered: false,
};

export default List;
