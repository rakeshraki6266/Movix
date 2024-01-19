import { useState } from "react";
import useFetch from "../../Hooks/UseFetch";
import Carousel from "../carousel/Carousel";
import ContentWrapper from "../contantWrapper/ContentWrapper";
import SwitchTabs from "../switchTabs/SwitchTabs";
const TopRated = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endPoint}/top_rated`);
  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}  endpoint={endPoint}/>
    </div>
  );
};

export default TopRated;