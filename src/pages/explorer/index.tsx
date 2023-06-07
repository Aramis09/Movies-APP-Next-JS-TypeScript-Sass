import Movie from "@/components/movie/movie";
import useToDoRequest from "@/customHooks/useToDoRequest";
import {
  handleChangePage,
  serviceGetMoviesToExplorer,
} from "@/services/movies";
import React, { useRef } from "react";
import styles from "../../styles/explorer.module.scss";
import RenderMovies from "@/components/renderMovieList/renderMovieList";
const paramsHook = {
  service: serviceGetMoviesToExplorer,
  serviceParams: { page: "1" },
};

export default function Explorer() {
  return (
    <>
      <RenderMovies service={serviceGetMoviesToExplorer} />
    </>
  );
}
