import { MovieDetail, Movies, responseGetMovies } from "@/interfaces/interfaces";
import { baseUrl } from "@/utils/addonsUrls";
import { options } from "@/utils/requestOptions";
import { verify } from "crypto";

export interface GetMovieParams {
  page:string
}
export interface GetMovieDetailParams {
  idMovie:number
}

//! Esto lo hago para ver si lo puedo reutilizar, asi es un poco mas entendible
export const isArray = (value:any):boolean => {
  return value && Array.isArray(value)
}
export const setPageMovies = (currentPage:string,direction:"back"|"next")=> {
  if(direction ==="next"){
    const newPage = Number(currentPage) + 1
    return {page:String(newPage)}
  }
  if(currentPage !=="1"){
    const newPage = Number(currentPage) -1 
    return {page:String(newPage)}
  }    
  return {page:"1"}
}

export const getMovies = async ({page}:GetMovieParams):Promise<Movies[]> => {
  const urlComplete = `${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${Number(page)}&sort_by=popularity.desc}`
  
  try {
    const response = await fetch(urlComplete,options)
    const movies:responseGetMovies = await response.json()
    return movies.results

  } catch (error) {
    console.error("getMovies,error")
    return []
  }
}

export const getMovieDetail = async ({idMovie}:GetMovieDetailParams):Promise<MovieDetail| undefined> => {
  const urlComplete = `${baseUrl}/movie/${idMovie}?language=en-US`
  
  try {
    const response = await fetch(urlComplete,options)
    const movieDetail:MovieDetail = await response.json()
    return movieDetail

  } catch (error) {
    console.error("getMovies,error")
  }
}
