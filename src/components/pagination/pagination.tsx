import { createArrayPagination } from "@/services/pagination";

export default function Pagination({ currentPage }: { currentPage: string }) {
  //!Falta extraer logica del componente y solucionar problema de cuando es mayor a 10
  // let arrayOfPages = Array.from(
  //   { length: Number(currentPage) },
  //   (_, current) => current + 1
  // );
  // if (arrayOfPages.length > 10) {
  // }
  let arrayOfPages = createArrayPagination(Number(currentPage));
  return (
    <div>
      {arrayOfPages.map((page) => (
        <>
          {page === Number(currentPage) ? (
            <button style={{ color: "red", background: "blue" }}>{page}</button>
          ) : (
            <button>{page}</button>
          )}
        </>
      ))}
    </div>
  );
}
