import React from "react";
import RenderMovies from "../renderMovieList/renderMovieList";
import { serviceGetPopularMovies } from "@/services/movies";

export default function PopularMovies() {
  return (
    <div>
      <RenderMovies service={serviceGetPopularMovies} />
    </div>
  );
}
