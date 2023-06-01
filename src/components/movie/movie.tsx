import { Movies } from "@/interfaces/interfaces";
import Link from "next/link";
import styles from "./movie.module.scss";
import React from "react";
import ImageMovie from "../imageMovie/imageMovie";
interface MovieProps {
  movie: Movies;
}

export default function Movie({ movie }: MovieProps) {
  return (
    <li className={styles.container}>
      <p>{movie.title}</p>
      <Link href={`/movieDetail/${String(movie.id)}`}>
        <ImageMovie url={movie.poster_path} />
      </Link>
      <p>{movie.release_date}</p>
      <p>{movie.vote_average}</p>
    </li>
  );
}
