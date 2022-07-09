import PropTypes from "prop-types";

function Footer({ children }) {
  return <footer>{children}</footer>;
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
