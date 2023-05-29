import useToDoRequest from "@/customHooks/useToDoRequest";
import { getMovieDetail } from "@/services/movies";

export default function MovieDetail({ idMovie }: { idMovie: number }) {
  const { data, setData } = useToDoRequest({
    service: getMovieDetail,
    serviceParams: { idMovie },
  });
  return <div>movieDetail</div>;
}
