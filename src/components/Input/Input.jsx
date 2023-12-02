import PropTypes from "prop-types";

const Input = ({ prefix, field, className }) => {
  return (
    <div className="relative">
      <span className="absolute top-[14px] left-[24px] text-primary text-[18px] font-medium leading-[1.1]">
        {prefix}
      </span>
      <input
        type="text"
        {...field}
        className={`[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-light-white py-[14px] pr-[24px] outline-none max-w-[160px] text-primary text-[18px] font-medium leading-[1.1] ${className}`}
      />
    </div>
  );
};

Input.propTypes = {
  prefix: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Input;
