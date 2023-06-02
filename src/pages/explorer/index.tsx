import Movie from "@/components/movie/movie";
import useToDoRequest from "@/customHooks/useToDoRequest";
import { GetMovieParams, getMovies, setPageMovies } from "@/services/movies";
import React, { useRef } from "react";
import styles from "../../styles/explorer.module.scss";
import { Movies } from "@/interfaces/interfaces";
const paramsHook = {
  service: getMovies,
  serviceParams: { page: "1" },
};

export default function Explorer() {
  const page = useRef("1");
  const { data: moviesList, changePaginate } = useToDoRequest<
    GetMovieParams,
    Movies[]
  >(paramsHook);

  const handleChangePage = (direction: "back" | "next") => {
    const newPage = setPageMovies(page.current, direction);
    changePaginate(newPage);
    page.current = newPage.page;
  };

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
      <button onClick={() => handleChangePage("back")}>go back</button>
      <br />
      <button onClick={() => handleChangePage("next")}>next</button>
    </div>
  );
}
