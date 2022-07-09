import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavigationLink({ children, to }) {
  return <NavLink to={to}>{children}</NavLink>;
}

NavigationLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};

NavigationLink.defaultProps = {
  children: React.createElement('div'),
  to: '/',
};

export default NavigationLink;
