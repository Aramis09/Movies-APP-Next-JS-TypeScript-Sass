import { serviceGetMoviesToExplorer } from "@/services/movies";
import styles from "../../styles/explorer.module.scss";
import RenderMovies from "@/components/renderMovieList/renderMovieList";

export default function Explorer() {
  return (
    <>
      <RenderMovies service={serviceGetMoviesToExplorer} />
    </>
  );
}
