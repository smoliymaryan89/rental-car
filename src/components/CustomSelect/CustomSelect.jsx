import PropTypes from "prop-types";

import Select, { components } from "react-select";

const SingleValue = ({ children, ...props }) => (
  <components.SingleValue
    {...props}
  >{`To ${children} $`}</components.SingleValue>
);

const CustomSelect = ({
  options,
  height,
  value,
  onChange,
  placeholder,
  className,
  isSearchable = false,
}) => {
  return (
    <Select
      components={placeholder === "To $" && { SingleValue }}
      value={value}
      onChange={onChange}
      options={options}
      className={className}
      classNamePrefix="custom-select"
      isSearchable={isSearchable}
      placeholder={placeholder}
      maxMenuHeight={height}
      styles={{
        menuList: (base) => ({
          ...base,
          "::-webkit-scrollbar": {
            width: "8px",
          },
          "::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "::-webkit-scrollbar-thumb": {
            background: "rgba(18, 20, 23, 0.05)",
            borderRadius: "10px",
          },
          "::-webkit-scrollbar-thumb:hover": {
            background: "rgba(18, 20, 23, 0.20)",
          },
        }),
        menu: (base) => ({
          ...base,
          zIndex: 100,
        }),
      }}
    />
  );
};

SingleValue.propTypes = {
  children: PropTypes.node.isRequired,
};

CustomSelect.propTypes = {
  options: PropTypes.array.isRequired,
  height: PropTypes.string.isRequired,
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  isSearchable: PropTypes.bool,
};

export default CustomSelect;
