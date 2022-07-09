import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function NavigationLink({ children, className, id, to }) {
  return (
    <NavLink className={className} id={id} to={to}>
      {children}
    </NavLink>
  );
}

NavigationLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  to: PropTypes.string,
};

NavigationLink.defaultProps = {
  className: undefined,
  id: undefined,
  to: "/",
};

export default NavigationLink;
