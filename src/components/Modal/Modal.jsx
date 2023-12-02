import PropTypes from "prop-types";

import { useEffect } from "react";
import { createPortal } from "react-dom";

import Close from "../../assets/icons/close.svg?react";

const carModalRoot = document.querySelector("#car-root");

const Modal = ({
  handleModal,
  img,
  make,
  model,
  year,
  description,
  functionalities,
  accessories,
  rentalConditions,
  mileage,
  rentalPrice,
  address,
  id,
  type,
  fuelConsumption,
  engineSize,
}) => {
  const accessoriesArr = [...accessories, ...functionalities];
  [accessoriesArr[2], accessoriesArr[3]] = [
    accessoriesArr[3],
    accessoriesArr[2],
  ];

  const price = rentalPrice.replace("$", "");
  const rentalConditionsArr = rentalConditions.split("\n");
  rentalConditionsArr.push(`Mileage: ${mileage}`);

  rentalConditionsArr.push(`Price: ${price}$`);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        handleModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleModal]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      handleModal();
    }
  };

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center bg-secondary "
    >
      <div className="relative bg-white px-[40px] pt-[20px] pb-[40px] rounded-[24px]">
        <button type="button" onClick={handleModal}>
          <Close className="absolute top-[16px] right-[16px]" />
        </button>

        <div className="w-[461px] rounded-[14px] bg-[#F3F3F2] mb-[14px]">
          <img
            src={img}
            alt=""
            width={461}
            height={248}
            className="rounded-[14px] block"
          />
        </div>
        <div className="text-left mb-[24px]">
          <h2 className=" text-[18px] text-primary font-medium leading-[1.3] mb-[8px]">
            {make} <span className="text-blue">{model},</span> {year}
          </h2>

          <ul className="flex gap-x-[12px] flex-wrap w-[288px] mb-[14px]">
            <li>{address.split(" ")[3]}</li>
            <li>{address.split(" ")[4]}</li>
            <li>Id: {id}</li>
            <li>Year: {year}</li>
            <li>Type: {type}</li>
            <li>Fuel Consumption: {fuelConsumption}</li>
            <li>Engine Size: {engineSize}</li>
          </ul>

          <p className="text-primary text-[14px] leading-[1.43] max-w-[461px]">
            {description}
          </p>
        </div>

        <div className="mb-[24px]">
          <h2 className="text-left text-primary text-[14px] leading-[1.43] font-medium mb-[8px]">
            Accessories and functionalities:
          </h2>
          <ul className="flex gap-x-[12px] flex-wrap max-w-[350px]">
            {accessoriesArr.map((data) => (
              <li key={data} className="text-secondary">
                {data}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-[24px]">
          <h2 className="text-left text-primary text-[14px] leading-[1.43] font-medium mb-[8px]">
            Rental Conditions:
          </h2>
          <ul className="flex gap-[8px] flex-wrap max-w-[380px]">
            {rentalConditionsArr.map((data) => (
              <li
                key={data}
                className="text-dark bg-dark-white rounded-[35px] py-[7px] px-[14px] leading-[1.5] tracking-[-0.24px] "
              >
                {data}
              </li>
            ))}
          </ul>
        </div>

        <a
          href="tel:+380730000000"
          className="bg-blue block py-[12px] px-[50px] w-[168px] rounded-[12px] text-white transition-colors duration-350 hover:bg-hover"
        >
          Rental Car
        </a>
      </div>
    </div>,
    carModalRoot
  );
};

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleModal: PropTypes.func.isRequired,
};

export default Modal;
