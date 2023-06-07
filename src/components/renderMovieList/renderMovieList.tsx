import useToDoRequest from "@/customHooks/useToDoRequest";
import { GetMovieParams, handleChangePage } from "@/services/movies";
import { useRef } from "react";
import Movie from "../movie/movie";
import { Movies } from "@/interfaces/interfaces";
import styles from "./renderMovies.module.scss";
interface RenderMovieProps {
  service: (serviceParams: GetMovieParams) => Promise<Movies[]>;
  serviceParams?: GetMovieParams;
}

export default function RenderMovies({ service }: RenderMovieProps) {
  const page = useRef("1");
  const { data: moviesList, changePaginate } = useToDoRequest({
    service: service,
    serviceParams: { page: "1" },
  });

  return (
    <div>
      <ul className={styles.container}>
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
