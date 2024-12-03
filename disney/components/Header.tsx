import Image from 'next/image';
import Link from 'next/link';
import SearchInput from './SearchInput';
import { ModeToggle } from './ThemeToggler';
import GenreDropdown from './GenreDropdown';

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex justify-between items-center p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link className="mr-10" href="/">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="Disney Logo"
          width={120}
          height={100}
          className="cursor-pointer invert-0 dark:invert "
        />
      </Link>
      <div className="flex space-x-2">
        {/* genre */}
        <GenreDropdown/>
        {/* search */}
        <SearchInput />
        {/* theme */}
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
