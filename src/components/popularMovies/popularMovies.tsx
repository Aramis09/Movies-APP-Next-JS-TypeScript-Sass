import React from "react";
import RenderMovies from "../renderMovieList/renderMovieList";
import { serviceGetPopularMovies } from "@/services/movies";

export default function PopularMovies() {
  return (
    <div>
      <h4>Top rated movies</h4>
      <RenderMovies service={serviceGetPopularMovies} />
    </div>
  );
}
