import { Movies } from "@/interfaces/interfaces";
import styles from "./movie.module.scss";
import React from "react";
interface MovieProps {
  movie: Movies;
}

export default function Movie({ movie }: MovieProps) {
  return (
    <div className={styles.container}>
      <p>{movie.title}</p>
      <p>{movie.release_date}</p>
      <p>{movie.video}</p>
      <p>{movie.original_title}</p>
    </div>
  );
}
