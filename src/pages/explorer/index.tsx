import Movie from "@/components/movie/movie";
import useToDoRequest from "@/customHooks/useToDoRequest";
import { getMovies, setPageMovies } from "@/services/movies";
import React, { useRef, useState } from "react";
const paramsHook = {
  service: getMovies,
  serviceParams: { page: "1" },
};

export default function Explorer() {
  const page = useRef("1");
  const { data, setData, changePaginate } = useToDoRequest(paramsHook);

  const handleChangePage = (direction: "back" | "next") => {
    const newPage = setPageMovies(page.current, direction);
    changePaginate(newPage);
    page.current = newPage.page;
  };

  return (
    <div>
      {data.map((movie) => {
        return <Movie movie={movie} key={movie.id} />;
      })}
      <button onClick={() => handleChangePage("back")}>go back</button>
      <br />
      <button onClick={() => handleChangePage("next")}>next</button>
    </div>
  );
}
