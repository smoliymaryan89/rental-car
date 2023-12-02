import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars, getCarByPage } from "../redux/car/carOperations";
import { selectFilteredCars, selectIsLoading } from "../redux/car/carSelectors";

import Container from "../components/Container/Container";
import RentalCarForm from "../components/RentalCarForm/RentalCarForm";
import CarList from "../components/CarList/CarList";
import Button from "../components/Button/Button";
import Loader from "../components/Loader/Loader";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [isFiltered, setIsFiltered] = useState(false);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const filteredCars = useSelector(selectFilteredCars);

  useEffect(() => {
    dispatch(getAllCars());
    dispatch(getCarByPage({ page }));
  }, [dispatch, page]);

  return (
    <section className="pt-[80px]">
      <Container>
        <RentalCarForm setIsFiltered={setIsFiltered} />
        <CarList cars={filteredCars} />

        {isLoading && <Loader />}

        {filteredCars.length === 0 && !isLoading && (
          <p className="text-[45px] text-center font-semibold text-primary">
            😓Unfortunately, no cars were found
          </p>
        )}
        {!isLoading &&
          !isFiltered &&
          filteredCars.length > 0 &&
          filteredCars.length < 33 && (
            <div className="flex justify-center pb-[150px]">
              <Button
                title="Load more"
                type="button"
                onClick={() => setPage((prevPage) => prevPage + 1)}
                className={
                  "bg-transparent !text-blue text-[16px] font-medium underline !px-0 !py-0 hover:bg-transparent hover:!text-hover"
                }
              />
            </div>
          )}
      </Container>
    </section>
  );
};

export default CatalogPage;
