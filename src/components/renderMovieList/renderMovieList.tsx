import useToDoRequest from "@/customHooks/useToDoRequest";
import { GetMovieParams, handleChangePage } from "@/services/movies";
import { useRef } from "react";
import Movie from "../movie/movie";
import { Movies } from "@/interfaces/interfaces";
import iconArrowRigth from "../../../assets/flecha-correcta.png";
import iconArrowLefth from "../../../assets/flecha-izquierda.png";
import stylesSecond from "./renderMoviesWithCategory.module.scss";
import styles from "./renderMovies.module.scss";
import Image from "next/image";
export interface RenderMovieProps {
  service: (serviceParams: GetMovieParams) => Promise<Movies[]>;
  serviceParams?: GetMovieParams;
  from?: string;
}

export default function RenderMovies({ service, from }: RenderMovieProps) {
  const page = useRef("1");
  const { data: moviesList, changePaginate } = useToDoRequest({
    service: service,
    serviceParams: { page: "1" },
  });

  const selecStyles =
    from === "pageRenderMoviesFromCategory" ? stylesSecond : styles;
  return (
    <div className={selecStyles.generalContainer}>
      <ul className={selecStyles.containerMovies} id="movies-slider">
        {moviesList &&
          Array.isArray(moviesList) &&
          moviesList.map((movie) => {
            if (movie.poster_path) {
              return <Movie movie={movie} key={movie.id} />;
            }
          })}
      </ul>
      <div>
        <Image
          src={iconArrowLefth}
          alt="arrowToNextPage"
          className={selecStyles.arrows}
          onClick={() => handleChangePage("back", changePaginate, page)}
        />
        {/* //!Aqui adentro tiene que ir un componente paginate, que haga el calculo
        de la cantiada de paginas que se van mostrando */}
        <Image
          src={iconArrowRigth}
          alt="arrowToNextPage"
          className={selecStyles.arrows}
          onClick={() => handleChangePage("next", changePaginate, page)}
        />
      </div>
    </div>
  );
}

// onClick={() => handleChangePage("back", changePaginate, page)}
// onClick={() => handleChangePage("next", changePaginate, page)}
