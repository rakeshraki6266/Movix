import React from "react";
import { useParams } from "react-router-dom";
import "./details.scss";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Recomend from "./recommendation/Recomend";
import Similar from "./similar/Similar";
import useFetch from "../../Hooks/UseFetch";
const Details = () => {
  const { mediaType, ids } = useParams();
  return (
    <div>
      <DetailsBanner />
      <Similar mediaType={mediaType} id={ids} />
      <Recomend mediaType={mediaType} id={ids} />
    </div>
  );
};

export default Details;
