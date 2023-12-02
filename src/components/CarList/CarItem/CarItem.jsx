import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../../../redux/car/carSlice";
import { selectFavorite } from "../../../redux/car/carSelectors";

import Heart from "../../../assets/icons/heart.svg?react";

import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import { useState } from "react";

const CarItem = ({
  id,
  img,
  make,
  model,
  year,
  rentalPrice,
  rentalCompany,
  address,
  type,
  functionalities,
  description,
  accessories,
  rentalConditions,
  mileage,
  fuelConsumption,
  engineSize,
}) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const favoriteCars = useSelector(selectFavorite);
  const isFavorite = favoriteCars.some((car) => car.id === id);

  const handleFavorite = () => {
    dispatch(toggleFavorites(id));
  };

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <li className="max-w-[274px] h-[426px]">
        <div className="relative mb-[14px] bg-[#F3F3F2] h-[268px] rounded-[12px]">
          <button
            type="button"
            onClick={handleFavorite}
            className="absolute right-[14px] top-[14px]"
          >
            <Heart className={isFavorite ? "fill-blue" : "stroke-white"} />
          </button>
          <img
            src={img}
            alt={model}
            width={274}
            height={268}
            className="object-cover h-[268px] rounded-[12px]"
          />
        </div>

        <div className="flex justify-between mb-[8px]">
          <h2 className="text-[16px] text-primary font-medium leading-[1.5]">
            {make === "Mercedes-Benz" ? "Mercedes" : make}{" "}
            <span className="text-blue">{model},</span> {year}
          </h2>
          <p className="text-[16px] text-primary font-medium leading-[1.5]">
            {rentalPrice}
          </p>
        </div>

        <ul className="flex flex-wrap gap-[5px] mb-[28px]">
          <li>{address.split(" ")[3]}</li>
          <li>{address.split(" ")[4]}</li>
          <li>{rentalCompany}</li>
          <li>{type}</li>
          <li>{model}</li>
          <li>{id}</li>
          <li>{functionalities[1]}</li>
        </ul>

        <Button
          title="Learn more"
          type="button"
          className={"py-[12px] w-full"}
          onClick={handleModal}
        />
      </li>

      {showModal && (
        <Modal
          handleModal={handleModal}
          img={img}
          make={make}
          model={model}
          year={year}
          description={description}
          accessories={accessories}
          functionalities={functionalities}
          rentalConditions={rentalConditions}
          mileage={mileage}
          rentalPrice={rentalPrice}
          address={address}
          id={id}
          type={type}
          fuelConsumption={fuelConsumption}
          engineSize={engineSize}
        />
      )}
    </>
  );
};

CarItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rentalPrice: PropTypes.string.isRequired,
  rentalCompany: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
  rentalConditions: PropTypes.string,
  mileage: PropTypes.number.isRequired,
  fuelConsumption: PropTypes.string.isRequired,
  engineSize: PropTypes.string.isRequired,
};

export default CarItem;
