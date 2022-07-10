import PropTypes from "prop-types";

function Button({ children, className, disabled, id, onClick, type }) {
  return (
    <button
      className={className}
      disabled={disabled}
      id={id}
      onClick={onClick}
      type={type === "button" ? "button" : "submit"}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: undefined,
  disabled: false,
  id: undefined,
  type: "submit",
};

export default Button;
