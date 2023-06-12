import { MovieDetail, Movies } from "@/interfaces/interfaces";
import { GetMovieDetailParams, GetMovieParams } from "@/services/movies";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
//Todos estos tipos se tiene que ir incrementando a medida que se reutiliza el hook
export type ServiceParams = GetMovieParams | GetMovieDetailParams 
export type ReturnServices = Movies[] | MovieDetail | undefined


interface UseToDoRequest<T,R> {
  service: (serviceParams:T) => Promise<R>
  serviceParams?: T

}

interface ReturnHook<T,R>{
  data?:R
  setData:Dispatch<SetStateAction<R | undefined>>
  changePaginate: (params:T)=> void
  reload:()=> void
}
// type SaveData = Movies[] 
//!faltan los catch en los llamados asincronos
export default function useToDoRequest<T extends ServiceParams ,R extends ReturnServices>({service,serviceParams}:UseToDoRequest<T,R>):ReturnHook<T,R> {
  const [data, setData] = useState<R>()
  const [reloadRequest, setReloadRequest] = useState<boolean>(false)
  useEffect(()=>{
    serviceParams && 
    service(serviceParams)
    .then(res=> res)
    .then(data => {
      setData(data)
    })
  },[reloadRequest])

  const changePaginate = (serviceParams:T) => {
    serviceParams &&
    service(serviceParams)
    .then(res=> res)
    .then(data => {
      setData(data)
    })
  }
  const reload = ()=> setReloadRequest(!reloadRequest)

  return {data,setData,changePaginate,reload}
}
