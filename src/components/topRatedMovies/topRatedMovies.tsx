import useToDoRequest from "@/customHooks/useToDoRequest";
import { getTopRatedMovies } from "@/services/movies";
import React from "react";
import Movie from "../movie/movie";

export default function TopRatedMovies() {
  const { data: moviesList, changePaginate } = useToDoRequest({
    service: getTopRatedMovies,
    serviceParams: { page: "1" },
  });
  console.log("etre");

  return (
    <div>
      <h4>Top rated movies</h4>
      <ul>
        {moviesList &&
          Array.isArray(moviesList) &&
          moviesList.map((movie) => {
            if (movie.poster_path) {
              return <Movie movie={movie} key={movie.id} />;
            }
          })}
      </ul>
      {/* <button onClick={() => handleChangePage("back")}>go back</button>
      <br />
      <button onClick={() => handleChangePage("next")}>next</button> */}
    </div>
  );
}
