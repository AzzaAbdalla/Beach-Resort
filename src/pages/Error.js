import React from "react";
import Hero from "../componenets/Hero";
import Banner from "../componenets/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="page not dound">
        <Link to="/" className="btn-primary">
          back home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
