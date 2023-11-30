import PropTypes from "prop-types";

const Button = ({ title, className, type }) => {
  return (
    <button
      className={`py-[14px] px-[44px] text-[14px] text-white font-semibold outline-none leading-[1.43] w-[136px] bg-blue rounded-[12px] transition-colors duration-350 hover:bg-hover ${className}`}
      type={type}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default Button;
