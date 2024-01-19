import React from "react";
import { useState } from "react";
import ContentWrapper from "../../../components/contantWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../Hooks/UseFetch";
import Carousel from "../../../components/carousel/Carousel";
const Treding = () => {
  const [endPoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endPoint}`);
  const onTabChange = (tab) => {
    setEndPoint(tab === "Days" ? "day" : "week");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Days", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Treding;
