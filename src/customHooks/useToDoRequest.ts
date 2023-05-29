import { Movies } from "@/interfaces/interfaces";
import { GetMovieParams } from "@/services/movies";
import { useEffect, useState } from "react";
//Todos estos estilos se tiene que ir incrementando a medida que se reutiliza el hook
type ServiceParams = GetMovieParams

interface UseToDoRequest {
  service: (serviceParams:ServiceParams)=> Promise<Movies[]>
  serviceParams?: ServiceParams
}

type SaveData = Movies[] 
//!faltan los catch en los llamados asincronos
export default function useToDoRequest({service,serviceParams}:UseToDoRequest) {
  const [data, setData] = useState<SaveData>([])
  useEffect(()=>{
    serviceParams && 
    service(serviceParams)
    .then(res=> res)
    .then(data => {
      setData(data)
    })
  },[])

  const changePaginate = (serviceParams:ServiceParams) => {
    serviceParams && 
    service(serviceParams)
    .then(res=> res)
    .then(data => {
      setData(data)
    })
  }
  return {data,setData,changePaginate}
}
