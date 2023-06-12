import useToDoRequest from "@/customHooks/useToDoRequest";
import { GetMovieParams, handleChangePage } from "@/services/movies";
import { useRef, useState } from "react";
import Movie from "../movie/movie";
import { Movies } from "@/interfaces/interfaces";
import iconArrowRigth from "../../../assets/flecha-correcta.png";
import iconArrowLefth from "../../../assets/flecha-izquierda.png";

import styles from "./renderMovies.module.scss";
import Image from "next/image";
export interface RenderMovieProps {
  service: (serviceParams: GetMovieParams) => Promise<Movies[]>;
  serviceParams?: GetMovieParams;
}

export default function RenderMovies({ service }: RenderMovieProps) {
  const { data: moviesList, changePaginate } = useToDoRequest({
    service: service,
    serviceParams: { page: "1" },
  });

  return (
    <div className={styles.generalContainer}>
      <ul className={styles.containerMovies} id="movies-slider">
        {moviesList &&
          Array.isArray(moviesList) &&
          moviesList.map((movie) => {
            if (movie.poster_path) {
              return <Movie movie={movie} key={movie.id} />;
            }
          })}
      </ul>
    </div>
  );
}

{
  /* <Image
        src={iconArrowLefth}
        alt="arrowToNextPage"
        className={styles.arrows}
        onClick={() => handleChangePage("back", changePaginate, page)}
      /> */
}
{
  /* <Image
        src={iconArrowRigth}
        alt="arrowToNextPage"
        className={styles.arrows}
        onClick={() => handleChangePage("next", changePaginate, page)}
      /> */
}
