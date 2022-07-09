import PropTypes from "prop-types";

function Header({ children }) {
  return <header>{children}</header>;
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
