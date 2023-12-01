import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3470FF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;