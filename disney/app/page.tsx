import CarouselBannerWrapper from '@/components/CarouselBannerWrapper';
import MoviesCarousel from '@/components/MoviesCarousel';
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '@/lib/getMovies';

export default async function Home() {
  const upComingMovies = await getUpcomingMovies();

  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();
  return (
    <div>
      {/* carousel */}
      <CarouselBannerWrapper />

      <div className="flex flex-col space-y-2 xl:-mt-64">
        <MoviesCarousel movies={upComingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />

        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </div>
  );
}
