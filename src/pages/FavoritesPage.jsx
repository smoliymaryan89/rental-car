import { useSelector } from "react-redux";
import { selectFavorite } from "../redux/car/carSelectors";

import CarList from "../components/CarList/CarList";
import Container from "../components/Container/Container";

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavorite);

  return (
    <section className="pt-[80px]">
      <Container>
        {favoriteCars.length === 0 && (
          <p className="text-[45px] text-center font-semibold text-primary mt-[150px]">
            You have no favorite cars yet.
          </p>
        )}
        <CarList cars={favoriteCars} />
      </Container>
    </section>
  );
};

export default FavoritesPage;
