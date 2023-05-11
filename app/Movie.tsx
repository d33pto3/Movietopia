import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, id, poster_path, release_date }: any) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <h1 className="text-base">{title}</h1>
      <p className="text-sm text-slate-500">
        Release Date: <span className="italic">{release_date}</span>
      </p>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
        />
      </Link>
    </div>
  );
}
