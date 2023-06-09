import React from "react";
import styles from "./carrouselMovies.module.scss";

import RenderMovies, {
  RenderMovieProps,
} from "../renderMovieList/renderMovieList";
import Link from "next/link";

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
      <Link href={`/movies/${tittle.split(" ")[0]}`}>
        <h4>{tittle}</h4>
      </Link>
      <RenderMovies service={serviceTools.service} />
    </div>
  );
}
