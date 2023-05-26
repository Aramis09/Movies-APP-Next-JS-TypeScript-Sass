import useToDoRequest from "@/customHooks/useToDoRequest";
import { getMovies } from "@/services/movies";
import React, { useState } from "react";

export default function Explorer() {
  const paramsHook = {
    service: getMovies,
    serviceParams: { page: "1" },
  };
  const { data, setData, changePaginate } = useToDoRequest(paramsHook);

  return (
    <div>
      <p>This page is to explorer movies random</p>
    </div>
  );
}
