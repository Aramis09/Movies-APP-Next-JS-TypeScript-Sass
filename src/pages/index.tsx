import PopularMovies from "@/components/popularMovies/popularMovies";
import TopRatedMovies from "@/components/topRatedMovies/topRatedMovies";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Orbitron&family=Pacifico&family=Pragati+Narrow&family=Roboto:wght@300&display=swap" rel="stylesheet"> */}
      </Head>
      <main>
        <TopRatedMovies />
        <PopularMovies />
      </main>
    </>
  );
}
