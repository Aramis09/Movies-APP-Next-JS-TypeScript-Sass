import useToDoRequest from "@/customHooks/useToDoRequest";
import { MovieDetail } from "@/interfaces/interfaces";
import { GetMovieDetailParams, getMovieDetail } from "@/services/movies";
import { useRouter } from "next/router";

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

  //!Tengo que hacer algo con el reload, pero no se porque no esta funcionando las cosas que quiero hacer

  // if(router.query)
  return (
    <>{!isNaN(idMovie) ? <>{JSON.stringify(data, null, 2)}</> : <>recarga</>}</>
  );
}
