import Image from "next/image";

export default async function MovieDetail({ params }: any) {
  const { movie } = params;

  const imagePath = "https://image.tmdb.org/t/p/original";

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();

  return (
    <div className="m-5">
      <h2 className="text-4xl">{res.title}</h2>
      <h2 className="text-lg italic">{res.release_date}</h2>
      <h2>Runtime: {res.runtime} minutes</h2>
      <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">
        {res.status}
      </h2>
      <Image
        className="my-12 w-full"
        src={imagePath + res.backdrop_path}
        alt={res.title}
        width={800}
        height={800}
        priority
      />
      <p>{res.overview}</p>
    </div>
  );
}
