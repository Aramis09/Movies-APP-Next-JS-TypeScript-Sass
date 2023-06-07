import { MovieDetail, responseGetMovies } from "@/interfaces/interfaces";
import { baseUrl, urlGetUpcomingMovies, urlToGetPopularMovies, urlToGetTopRatedMovies, urlTogetMovieToExplorer } from "@/utils/addonsUrls";
import { options } from "@/utils/requestOptions";

export interface GetMovieParams {
  page:string
}
export interface GetMovieDetailParams {
  idMovie:number
}

//! this is used on "explorer page" to handle nevigate 
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

export const handleChangePage = (
  direction: "back" | "next",
  changePaginate: (params: GetMovieParams) => void,
  page: React.MutableRefObject<string>
) => {
  const newPage = setPageMovies(page.current, direction);
  changePaginate(newPage);
  page.current = newPage.page;
};



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
//! this create query functions to get movies of diferents category
export const createRequestToGetArrayMovies = (nameReqest:string,urlAddons:string) => {
  return async function ({page}:GetMovieParams) {
    const urlComplete = `${baseUrl}${urlAddons}${page}`
  
    try {
      const response = await fetch(urlComplete,options)
      const movies:responseGetMovies = await response.json()
      return movies.results
  
    } catch (error) {
      console.error(`${nameReqest},error`)
      return []
    }
  }
} 

export const serviceGetTopRatedMovies = createRequestToGetArrayMovies(
  "getTopRatedMovies",
  urlToGetTopRatedMovies
);
export const  serviceGetMoviesToExplorer = createRequestToGetArrayMovies(
  "getMovieToExplorer",
  urlTogetMovieToExplorer
)
export const  serviceGetPopularMovies = createRequestToGetArrayMovies(
  "getPopularMovie",
  urlToGetPopularMovies
)
export const  serviceGetUpcomingMovies = createRequestToGetArrayMovies(
  "getUpcomingMovie",
  urlGetUpcomingMovies
)