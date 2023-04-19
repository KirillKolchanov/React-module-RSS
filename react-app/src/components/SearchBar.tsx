import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../store/reducers/charactersSlice';
import { charactersApi } from '../api/charactersApi';
import { ICharacter } from '../models';

interface RootState {
  characters: {
    searchValue: string;
    results: ICharacter[];
    isLoading: boolean;
    error: string | null;
  };
}

const SearchBar = () => {
  const [triggerSearchCharacters] = charactersApi.endpoints.searchCharacters.useLazyQuery();

  const dispatch = useDispatch();

  const searchValue = useSelector((state: RootState) => state.characters.searchValue);

  useEffect(() => {
    triggerSearchCharacters(searchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      triggerSearchCharacters(searchValue);
    }
  };

  return (
    <div className="relative mt-8 flex justify-center">
      <div className="relative">
        <input
          className="w-54 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent border shadow-sm border-slate-300"
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(event) => dispatch(setSearchValue(event.target.value))}
          onKeyDown={handleKeyDown}
        />
        {searchValue && (
          <button
            className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 bg-transparent hover:bg-gray-100 overflow-visible"
            onClick={() => dispatch(setSearchValue(''))}
          >
            <svg
              className="w-4 h-4 fill-current text-gray-400 hover:text-gray-600"
              viewBox="0 0 24 24"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L9.83 12l5.58-5.59z" />
            </svg>
          </button>
        )}
      </div>
      <button
        className="ml-2 top-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-md
           hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={() => triggerSearchCharacters(searchValue)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
