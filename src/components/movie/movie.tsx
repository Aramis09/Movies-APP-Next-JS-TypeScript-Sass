import { Movies } from "@/interfaces/interfaces";
import styles from "./movie.module.scss";
import React from "react";
import ImageMovie from "../imageMovie/imageMovie";
interface MovieProps {
  movie: Movies;
}

export default function Movie({ movie }: MovieProps) {
  return (
    <div className={styles.container}>
      <p>{movie.title}</p>
      <p>{movie.original_title}</p>
      <ImageMovie url={movie.poster_path} />
      <p>{movie.release_date}</p>
      <p>{movie.video}</p>
    </div>
  );
}
