import React from "react";
import PropTypes from "prop-types";

function Heading({ children, className, id, level }) {
  return React.createElement(`h${level}`, { className, id }, children);
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  level: PropTypes.string,
};

Heading.defaultProps = {
  className: undefined,
  id: undefined,
  level: "5",
};

export default Heading;
