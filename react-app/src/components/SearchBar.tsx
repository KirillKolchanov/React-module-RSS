import React, { useState } from 'react';

const SearchBar = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') as string);

  return (
    <div className="relative mt-8 flex justify-center">
      <input
        className="w-54 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent border shadow-sm border-slate-300"
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button
        className="ml-2 top-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-md
           hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={() => localStorage.setItem('searchValue', searchValue)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
