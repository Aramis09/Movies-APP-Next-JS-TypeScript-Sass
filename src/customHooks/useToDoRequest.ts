import { MovieDetail, Movies } from "@/interfaces/interfaces";
import { GetMovieDetailParams, GetMovieParams } from "@/services/movies";
import { useEffect, useState } from "react";
//Todos estos tipos se tiene que ir incrementando a medida que se reutiliza el hook
export type ServiceParams = GetMovieParams | GetMovieDetailParams 
export type ReturnServices = Movies[] | MovieDetail | undefined


interface UseToDoRequest<T extends ServiceParams,R extends ReturnServices> {
  service: (serviceParams:T) => Promise<R>
  serviceParams?: T
}

// type SaveData = Movies[] 
//!faltan los catch en los llamados asincronos
export default function useToDoRequest<T extends ServiceParams,R extends ReturnServices>({service,serviceParams}:UseToDoRequest<T,R>) {
  const [data, setData] = useState<ReturnServices>([])
  useEffect(()=>{
    serviceParams && 
    service(serviceParams)
    .then(res=> res)
    .then(data => {
      setData(data)
    })
  },[])

  const changePaginate = (serviceParams:T) => {
    serviceParams &&
    service(serviceParams)
    .then(res=> res)
    .then(data => {
      setData(data)
    })
  }
  return {data,setData,changePaginate}
}
