'use client';
import MoviesCarousel from '@/components/MoviesCarousel';
import { getDiscoverMovies } from '@/lib/getMovies';
import { Movie } from '@/typings';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function GenrePage() {
  const params = useParams();

  const id = params.id;
  const searchParams = useSearchParams();
  const search = searchParams.get('genre');

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const res = async () => {
      try {
        const movies = await getDiscoverMovies(id as string);

        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    res();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:-mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {search}</h1>
      </div>
      <MoviesCarousel title="Genre" movies={movies} isVertical />
    </div>
  );
}

export default GenrePage;
