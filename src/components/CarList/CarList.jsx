import PropTypes from "prop-types";

import CarItem from "./CarItem/CarItem";

const CarList = ({ cars }) => {
  return (
    <ul className="flex flex-wrap gap-x-[29px] gap-y-[50px] mb-[100px]">
      {cars.map(
        ({
          id,
          img,
          make,
          model,
          year,
          rentalPrice,
          address,
          rentalCompany,
          type,
          functionalities,
          description,
          accessories,
          rentalConditions,
          mileage,
          fuelConsumption,
          engineSize,
        }) => (
          <CarItem
            key={id}
            id={id}
            img={img}
            make={make}
            model={model}
            year={year}
            rentalPrice={rentalPrice}
            address={address}
            rentalCompany={rentalCompany}
            type={type}
            functionalities={functionalities}
            description={description}
            accessories={accessories}
            rentalConditions={rentalConditions}
            mileage={mileage}
            fuelConsumption={fuelConsumption}
            engineSize={engineSize}
          />
        )
      )}
    </ul>
  );
};

CarList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      rentalPrice: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      rentalCompany: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string.isRequired,
      accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
      rentalConditions: PropTypes.string.isRequired,
      mileage: PropTypes.number.isRequired,
      fuelConsumption: PropTypes.string.isRequired,
      engineSize: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CarList;
