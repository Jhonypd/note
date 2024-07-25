import React from 'react';
import { CgNotes, CgSearch } from 'react-icons/cg';
import { useSearch } from '../context/SearchContext';

const Search: React.FC = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center max-w-lg mx-auto mb-5">
      <label className="sr-only" htmlFor="Buscar">
        Buscar
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <CgNotes className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          placeholder="Buscar..."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
          id="Buscar"
          type="text"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <button
        className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="submit"
      >
        <CgSearch className="w-4 h-4 me-2" />
        Buscar
      </button>
    </form>
  );
};

export default Search;
