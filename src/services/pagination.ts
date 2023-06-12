export const createArrayPagination = (currentPage:number)=> {
  console.log(currentPage);
  
  let arrayOfPages:number[] = []
  if(currentPage <= 10){
    arrayOfPages = Array.from(
      { length: Number(currentPage) },
      (_, current) => current + 1
    );
  }
  if(currentPage > 10 ){
    arrayOfPages = Array.from(
      { length: 10 },
      (_, current) => current + (Math.floor(currentPage/10))*10
    );
  }
  return arrayOfPages
}