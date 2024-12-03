import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Genres } from '@/typings';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

async function GenreDropdown() {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
  const options: RequestInit = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const res = await fetch(url, options);
  const data: Genres = await res.json();


  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex justify-center items-center">
        Genre <ChevronDown className="ml-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data.genres.map((genre) => (
          <DropdownMenuItem key={genre.id}>
            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
              {genre.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default GenreDropdown;
