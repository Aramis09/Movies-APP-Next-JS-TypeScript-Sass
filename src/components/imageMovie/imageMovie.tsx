import React from "react";
const urlBase500px = "https://image.tmdb.org/t/p/w500";
const urlBaseFullSize = "https://image.tmdb.org/t/p/original";

export default function ImageMovie({ url }: { url: string }) {
  return <img src={`${urlBase500px}${url}`} alt="" />;
}
