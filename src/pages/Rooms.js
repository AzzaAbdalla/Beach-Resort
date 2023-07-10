import React from "react";
import Hero from "../componenets/Hero";
import Banner from "../componenets/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../componenets/RoomsContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            back home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
