import React from "react";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";
import Services from "../component/Services";
import FeaturedRoom from "../FeaturedRoom";

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title="Luxurious Rooms" subtitle="delux rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
    </>
  );
};

export default Home;
