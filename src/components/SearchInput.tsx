import { useState, useCallback } from 'react';
import SearchIcon from '@/assets/search_icon.svg?react';

interface SearchInputProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchInput = ({ onSearch, placeholder = 'Pesquisar' }: SearchInputProps) => {
  const [query, setQuery] = useState('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      onSearch(value);
    },
    [onSearch]
  );

  return (
    <div className="relative" data-testid="search-input">
      <input
        type="text"
        className="w-full md:w-72 h-12 px-4 pr-12 rounded-lg border border-betalent-gray-10 bg-white focus:outline-none focus:ring-2 focus:ring-betalent-blue-primary focus:border-transparent"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
      />
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-betalent-gray-10" aria-hidden="true" />
      </div>
    </div>
  );
};

export default SearchInput;
