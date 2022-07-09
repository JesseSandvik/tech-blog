import React from "react";
import PropTypes from "prop-types";

function ListItem({ children, className, id, title }) {
  return (
    <li className={className} id={id} title={title}>
      {children}
    </li>
  );
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};

ListItem.defaultProps = {
  className: undefined,
  id: undefined,
  title: undefined,
};

export default ListItem;
