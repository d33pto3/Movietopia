import Movie from "../Movie";

export default async function Movies() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();
  // console.log(res);

  return (
    <div>
      <h1 className="m-5 text-2xl text-red-500">Popular Movies</h1>
      <div className="m-5 grid gap-16 grid-cols-fluid">
        {res &&
          res?.results?.map((movie: any) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
      </div>
    </div>
  );
}
