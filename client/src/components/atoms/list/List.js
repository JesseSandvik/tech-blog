import React from "react";
import PropTypes from "prop-types";

function List({ children, className, id, ordered }) {
  const listType = ordered ? "ol" : "ul";

  return React.createElement(listType, { className, id }, children);
}

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  ordered: PropTypes.bool,
};

List.defaultProps = {
  children: React.createElement("div"),
  className: undefined,
  id: undefined,
  ordered: false,
};

export default List;
