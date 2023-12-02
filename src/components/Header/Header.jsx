import { Link } from "react-router-dom";

import Container from "../Container/Container";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="py-[25px] ">
      <Container
        className={
          "flex items-center justify-between bg-light-white rounded-[18px]"
        }
      >
        <Link
          to="/"
          className="block text-[24px] font-bold text-primary py-[20px]"
        >
          Drivewise
        </Link>

        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
