import ImageMovie from "@/components/imageMovie/imageMovie";
import TopRatedMovies from "@/components/topRatedMovies/topRatedMovies";
import useToDoRequest from "@/customHooks/useToDoRequest";
import { MovieDetail } from "@/interfaces/interfaces";
import { GetMovieDetailParams, getMovieDetail } from "@/services/movies";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MovieDetail(): JSX.Element {
  const router = useRouter();
  const idMovie = Number(router.query.idMovie);
  const { data: movie, reload } = useToDoRequest({
    service: getMovieDetail,
    serviceParams: { idMovie: idMovie },
  });
  //! Este useEffec es porque el idMovie me da un valor de null primero, entonces
  //! necesito que se recargue de nuevo la pagina cuando el id sea distinto de nullo
  useEffect(() => reload(), [idMovie]);

  return (
    <>
      {movie ? (
        <>
          <h4>{movie.title}</h4>
          <ImageMovie url={movie.poster_path} />
          <p>{movie.release_date}</p>
          <p>{movie.homepage}</p>
          <p>{movie.overview}</p>
        </>
      ) : (
        <>Opps!!, Movie don't available</>
      )}
    </>
  );
}
