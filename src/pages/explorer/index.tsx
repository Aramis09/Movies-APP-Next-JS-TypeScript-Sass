import Movie from "@/components/movie/movie";
import useToDoRequest from "@/customHooks/useToDoRequest";
import {
  handleChangePage,
  serviceGetMoviesToExplorer,
} from "@/services/movies";
import React, { useRef } from "react";
import styles from "../../styles/explorer.module.scss";
const paramsHook = {
  service: serviceGetMoviesToExplorer,
  serviceParams: { page: "1" },
};

export default function Explorer() {
  const page = useRef("1");
  const { data: moviesList, changePaginate } = useToDoRequest(paramsHook);

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
