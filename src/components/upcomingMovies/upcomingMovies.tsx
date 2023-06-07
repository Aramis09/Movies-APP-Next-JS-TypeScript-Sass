import React from "react";
import RenderMovies from "../renderMovieList/renderMovieList";
import { serviceGetUpcomingMovies } from "@/services/movies";

export default function UpcomingMovies() {
  return (
    <>
      <RenderMovies service={serviceGetUpcomingMovies} />
    </>
  );
}
