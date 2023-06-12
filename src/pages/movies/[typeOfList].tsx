import RenderMovies from "@/components/renderMovieList/renderMovieList";
import { selectService } from "@/services/movies";
import { useRouter } from "next/router";
export default function DiscoverMovies() {
  const router = useRouter();
  const location = String(router.query["typeOfList"]);

  return (
    <div>
      <RenderMovies
        from={"pageRenderMoviesFromCategory"}
        service={selectService(location)}
      />
    </div>
  );
}
