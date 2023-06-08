import React from "react";
import styles from "./carrouselMovies.module.scss";

import RenderMovies, {
  RenderMovieProps,
} from "../renderMovieList/renderMovieList";

interface CarrouselMoviesTypes {
  tittle: string;
  serviceTools: RenderMovieProps;
}
export default function CarrouselMovies({
  tittle,
  serviceTools,
}: CarrouselMoviesTypes) {
  return (
    <div className={styles.container}>
      <h4>{tittle}</h4>
      <RenderMovies service={serviceTools.service} />
    </div>
  );
}
