import React from "react";

import LatestMovies from "./Categories/LatesMovies";
import RecommendedForYou from "./Categories/RecommendedForYou";

const Home = () => {
  return (
    <div>
      <LatestMovies />
      <RecommendedForYou />
    </div>
  );
};

export default Home;
