// import React, { useEffect } from "react";
// import {
//   getTopRatedMoviesData,
//   getUpcomingMoviesData,
// } from "../server/Fetcher";
// import { useQuery } from "react-query";

const Movies = () => {
  //   const { data, isLoading, error, refetch } = useQuery(
  //     "moviesData", // ? key
  //     getMoviesData // ? fetcher
  //   );

  //   const topRatedMoviesData = useQuery(
  //     "topRatedMoviesData",
  //     getTopRatedMoviesData
  //   );
  //   const upcomingMoviesData = useQuery(
  //     "upcomingMoviesData",
  //     getUpcomingMoviesData
  //   );

  return (
      {/* {moviesData.error ? (
        <React.Fragment>Oh no, there was an error</React.Fragment>
      ) : moviesData.isLoading ? (
        <React.Fragment>Loading...</React.Fragment>
      ) : moviesData.data ? (
        moviesData.data.map((item: any) => (
          <div key={item.id}>
            <h3>{item.backdrop_path}</h3>
          </div>
        ))
      ) : null} */}
  );
};

export default Movies;
