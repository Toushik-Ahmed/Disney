import MoviesCarousel from '@/components/MoviesCarousel';
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    terms: string;
  };
};

async function SearchPage({ params }: Props) {
  const { terms } = await params; // Destructure after ensuring params is resolved
  if (!terms) notFound();
  const termToUse = decodeURI(terms);

  const movies = await getSearchedMovies(termToUse);

  const popularMovies = await getPopularMovies();
  console.log(terms);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:-mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>
        <MoviesCarousel title='Movies' movies={movies} isVertical={true} />
        <MoviesCarousel movies={popularMovies} title="popular" />
      </div>
    </div>
  );
}

export default SearchPage;
