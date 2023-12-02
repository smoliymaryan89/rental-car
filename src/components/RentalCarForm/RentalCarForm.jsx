import PropTypes from "prop-types";

import { useForm, Controller } from "react-hook-form";

import { useDispatch } from "react-redux";
import { carData, priceData } from "../../utils/selectData";

import CustomSelect from "../CustomSelect/CustomSelect";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { setFilter } from "../../redux/car/carSlice";

const RentalCarForm = ({ setIsFiltered }) => {
  const dispatch = useDispatch();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      carBrand: "",
      price: "",
      from: "",
      to: "",
    },
  });

  const onSubmit = ({ carBrand, price, from, to }) => {
    if (!carBrand && !price && !from.trim() && !to.trim()) {
      return;
    }

    dispatch(setFilter({ carBrand, price, from, to }));
    setIsFiltered(true);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-end justify-center gap-[18px] mb-[50px]"
    >
      <div>
        <label className="text-grey text-[14px] font-medium leading-[1.29] mb-[8px] block">
          Car Brand
        </label>
        <Controller
          control={control}
          name="carBrand"
          render={({ field: { onChange, value } }) => (
            <CustomSelect
              options={carData}
              value={carData.find((car) => car.value === value)}
              onChange={(val) => onChange(val.value)}
              placeholder={"Enter the text"}
              className={"w-[224px]"}
              height={"242px"}
              isSearchable={true}
            />
          )}
        />
      </div>

      <div>
        <label className="text-grey text-[14px] font-medium leading-[1.29] mb-[8px] block">
          Price/ 1 hour
        </label>
        <Controller
          control={control}
          name="price"
          render={({ field: { onChange, value } }) => (
            <CustomSelect
              options={priceData}
              value={priceData.find((price) => price.value === value)}
              onChange={(val) => onChange(val.value)}
              placeholder={"To $"}
              className={"w-[125px]"}
              height={"158px"}
            />
          )}
        />
      </div>

      <div>
        <label className="text-grey text-[14px] font-medium leading-[1.29] mb-[8px] block">
          Car mileage / km
        </label>

        <div className="flex items-center">
          <Controller
            name="from"
            control={control}
            render={({ field }) => (
              <Input
                field={{
                  ...field,
                  value: field.value.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                }}
                prefix={"From"}
                className={
                  "rounded-l-[14px] border-r-[1px] border-border-20 pl-[72px]"
                }
              />
            )}
          />
          <Controller
            name="to"
            control={control}
            render={({ field }) => (
              <Input
                field={{
                  ...field,
                  value: field.value.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                }}
                prefix={"To"}
                className={"rounded-r-[14px] pl-[50px]"}
              />
            )}
          />
        </div>
      </div>

      <Button title={"Search"} type="submit" />
    </form>
  );
};

RentalCarForm.propTypes = {
  setIsFiltered: PropTypes.func,
};

export default RentalCarForm;
