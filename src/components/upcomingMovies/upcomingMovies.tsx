import RenderMovies from "../renderMovieList/renderMovieList";
import { serviceGetUpcomingMovies } from "@/services/movies";

export default function UpcomingMovies() {
  return (
    <>
      <h4>Upcoming Movies</h4>
      <RenderMovies service={serviceGetUpcomingMovies} />
    </>
  );
}
