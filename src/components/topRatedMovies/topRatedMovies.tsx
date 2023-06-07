import useToDoRequest from "@/customHooks/useToDoRequest";
import { handleChangePage, serviceGetTopRatedMovies } from "@/services/movies";
import React, { useRef } from "react";
import Movie from "../movie/movie";
import RenderMovies from "../renderMovieList/renderMovieList";

export default function TopRatedMovies() {
  return (
    <div>
      <h4>Top rated movies</h4>
      <RenderMovies service={serviceGetTopRatedMovies} />
    </div>
  );
}
