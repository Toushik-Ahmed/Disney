'use client';
import MoviesCarousel from '@/components/MoviesCarousel';
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies';
import { Movie } from '@/typings';
import { notFound, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function SearchPage() {
  const { terms } = useParams();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  if (!terms) notFound();
  const termToUse = decodeURI(terms as string);

  useEffect(() => {
    const res = async () => {
      const movie = await getSearchedMovies(termToUse);
      const popularMovie = await getPopularMovies();
      setMovies(movie);
      setPopularMovies(popularMovie);
    };
    res();
  }, [terms]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:-mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>
        <MoviesCarousel title="Movies" movies={movies} isVertical={true} />
        <MoviesCarousel movies={popularMovies} title="popular" />
      </div>
    </div>
  );
}

export default SearchPage;
