import PropTypes from "prop-types";

function Button({ children, className, condition, id, onClick }) {
  return (
    <button
      className={className}
      id={id}
      onClick={onClick}
      type={condition ? "button" : "submit"}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  condition: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: undefined,
  condition: undefined,
  id: undefined,
};

export default Button;
