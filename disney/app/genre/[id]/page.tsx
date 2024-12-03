import MoviesCarousel from '@/components/MoviesCarousel';
import { getDiscoverMovies } from '@/lib/getMovies';
import { useParams, useSearchParams } from 'next/navigation';

type Props={
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  }
}

async function GenrePage({params:{id},searchParams:{genre}}:Props) {
  // const params = useParams();
  // const searchParams = useSearchParams();
  // const id = params.id as string;
  // const genre = searchParams.get('genre');

  const movies = await getDiscoverMovies(id);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:-mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {genre}</h1>
      </div>
      <MoviesCarousel title="Genre" movies={movies} isVertical />
    </div>
  );
}

export default GenrePage;
