import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWJmNmVjOTk3ZGJhMDVkMzY2OTUwYTcxYmIzZTIwYiIsInN1YiI6IjY0ZjU5MDg0MTIxOTdlMDExYmFiOTkxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K0fYSJzvBHmZ-uMbwiahb4jnc00ezRQMNY7GfCWLhCc";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};
export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
