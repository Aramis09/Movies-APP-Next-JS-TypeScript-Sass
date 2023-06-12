import CarrouselMovies from "@/components/carrouselMovies/carrouselMovies";
import RenderMovies from "@/components/renderMovieList/renderMovieList";
import { selectService } from "@/services/movies";
import { useRouter } from "next/router";
export default function DiscoverMovies() {
  const router = useRouter();
  const location = String(router.query["typeOfList"]);

  return (
    <div>
      <CarrouselMovies
        tittle="Top rated movies"
        serviceTools={{
          service: selectService(location),
          from: "pageRenderMoviesFromCategory",
        }}
      />
      {/* <RenderMovies
        from={"pageRenderMoviesFromCategory"}
        service={selectService(location)}
      /> */}
    </div>
  );
}
