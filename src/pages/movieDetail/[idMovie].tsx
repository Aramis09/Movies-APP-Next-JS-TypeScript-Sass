import useToDoRequest from "@/customHooks/useToDoRequest";
import { MovieDetail } from "@/interfaces/interfaces";
import { GetMovieDetailParams, getMovieDetail } from "@/services/movies";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MovieDetail(): JSX.Element {
  const router = useRouter();
  const idMovie = Number(router.query.idMovie);
  const { data, reload } = useToDoRequest<
    GetMovieDetailParams,
    MovieDetail | undefined
  >({
    service: getMovieDetail,
    serviceParams: { idMovie: idMovie },
  });
  //! Este useEffec es porque el idMovie me da un valor de null primero, entonces
  //! necesito que se recargue de nuevo la pagina cuando el id sea distinto de nullo
  useEffect(() => reload(), [idMovie]);

  return (
    <>
      {!isNaN(idMovie) ? <>{JSON.stringify(data, null, 2)}</> : <>recarga</>}
      {data}
    </>
  );
}
