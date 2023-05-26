import { Movies, responseGetMovies } from "@/interfaces/interfaces";
import { baseUrl } from "@/utils/addonsUrls";

export interface GetMovieParams {
  page:string
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjViODJkOTY0NDNjYThjOWI3M2UzZDM3NmNlYWVlZSIsInN1YiI6IjY0NmQ0ZGEyMmJjZjY3MDBmZTYyNjQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ktdzTj-8CTT29nzpzTu36dJzG5xQOozDtuIVj6TSB7M'
  }
};


export const getMovies = async ({page}:GetMovieParams):Promise<Movies[]> => {
  const urlComplete = `${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}}&sort_by=popularity.desc}`
  try {
    const response = await fetch(urlComplete,options)
    const movies:responseGetMovies = await response.json()
    return movies.results
  } catch (error) {
    console.error("getMovies,error")
    return []
  }
}
