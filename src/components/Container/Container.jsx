import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="w-[1213px] px-[15px] mx-auto">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
