import React from "react";
import styles from "./imageMovie.module.scss";
const urlBase500px = "https://image.tmdb.org/t/p/w500";
const urlBaseFullSize = "https://image.tmdb.org/t/p/original";

export default function ImageMovie({ url }: { url: string }) {
  console.log(`${urlBase500px}${url}`);

  return (
    <img
      src={`${urlBaseFullSize}${url}`}
      alt="movie-image"
      className={styles.movieImage}
    />
  );
}
