import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import CharacterCard from './CharacterCard';

import { ICharacter } from '../models';
import Loader from './Loader';

const Cards = (): JSX.Element => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<true | false>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<{ results: ICharacter[] }>(
          'https://rickandmortyapi.com/api/character'
        );
        const data = response.data;
        setCharacters(data.results);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError((err as AxiosError).message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="mt-12 mb-24">
      {error && <h1 className="ml-10 text-red-500">{error}</h1>}
      {isLoading && <Loader />}
      <div className="flex justify-center gap-16 flex-wrap">
        {characters
          ? characters.map((character: ICharacter) => (
              <CharacterCard key={character.id} character={character} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Cards;
