import useToDoRequest from "@/customHooks/useToDoRequest";
import { getTopRatedMovies, handleChangePage } from "@/services/movies";
import React, { useRef } from "react";
import Movie from "../movie/movie";

export default function TopRatedMovies() {
  const page = useRef("1");
  const { data: moviesList, changePaginate } = useToDoRequest({
    service: getTopRatedMovies,
    serviceParams: { page: "1" },
  });

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
      <button onClick={() => handleChangePage("back", changePaginate, page)}>
        go back
      </button>
      <br />
      <button onClick={() => handleChangePage("next", changePaginate, page)}>
        next
      </button>
    </div>
  );
}
