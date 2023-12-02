import { Link } from "react-router-dom";

import Container from "../components/Container/Container";

const HomePage = () => {
  return (
    <Container>
      <div className="bg-hero-img bg-no-repeat bg-cover absolute top-0 left-0 w-full h-full -z-10"></div>
      <div>
        <div className="max-w-[500px] pt-[65px]">
          <h1 className="text-white text-[46px] font-bold mb-[20px] leading-[1.2]">
            Explore the freedom of car rental with
            <span className="text-blue"> Drivewise.</span>
          </h1>
          <p className="text-white font-medium text-[18px]   mb-[25px]">
            Whether you're planning a road trip, need a reliable vehicle for a
            business trip, or just want the convenience Of having a Car at your
            disposal, we've got you covered.
          </p>
          <Link
            to={"/catalog"}
            className="block bg-blue px-[15px] py-[15px] w-[160px]  text-center text-[14px] font-bold text-white rounded-[12px] transition-colors duration-350 hover:bg-hover"
          >
            Get your car today
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
