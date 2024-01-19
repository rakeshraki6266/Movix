import React from "react";
import "./home.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Treding from "./treding/Treding";
import Popular from "./popular/Popular";
import TopRated from "../../components/topRated/TopRated";
const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Treding />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
