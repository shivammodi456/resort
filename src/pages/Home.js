import React from "react";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Hero hero="defaultHero">
      <Banner title="Luxurious Rooms" subtitle="delux rooms starting at $299">
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
  );
};

export default Home;
