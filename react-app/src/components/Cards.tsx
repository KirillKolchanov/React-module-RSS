import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import CharacterCard from './CharacterCard';

import { ICharacter, IEpisode } from '../models';
import Loader from './Loader';
import Modal from './Modal';

interface cardsProps {
  searchValue: string;
}

const Cards = ({ searchValue }: cardsProps): JSX.Element => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<true | false>(false);
  const [searchCharacters, setSearchCharacters] = useState<ICharacter[]>([]);
  const [characterData, setCharacterData] = useState<ICharacter | Record<string, never>>({});
  const [episodeData, setEpisodeData] = useState<IEpisode | Record<string, never>>({});
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    if (characters.length) {
      setSearchCharacters(
        characters.filter((card) => card.name.toLowerCase().includes(searchValue.toLowerCase()))
      );
    }
  }, [characters, searchValue]);

  const characterDetails = async (characterData: ICharacter) => {
    console.log(characterData);

    try {
      const locationResponse = await axios(`${characterData.episode[0]}jhgf`);
      const locationData = await locationResponse.data;
      setEpisodeData(locationData);
    } catch (err) {
      setError((err as AxiosError).message);
    }

    setIsOpen(true);
    setCharacterData(characterData);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="mt-12 mb-24">
      {!error ? (
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
          characterData={characterData}
          episodeData={episodeData}
        />
      ) : null}
      {error && (
        <>
          <h1 className="mb-10 text-red-500 text-center">{error}</h1>
          <iframe
            src="https://giphy.com/embed/x2MAFjFlyX2YukQisM"
            width="480"
            height="260"
            className="giphy-embed m-auto"
            allowFullScreen
          ></iframe>
        </>
      )}

      {isLoading && <Loader />}

      {!error ? (
        <div className="flex justify-center gap-16 flex-wrap">
          {searchCharacters.length !== 0 ? (
            searchCharacters.map((character: ICharacter) => (
              <CharacterCard
                key={character.id}
                character={character}
                onCharacter={characterDetails}
              />
            ))
          ) : (
            <div className="flex flex-col">
              <h1 className="mb-5 text-center">No matches found 😢</h1>
              <h1 className="mb-5 text-center">Try another search...</h1>
              <iframe
                src="https://giphy.com/embed/l41lVxNzuBpH2aYIU"
                width="480"
                height="270"
                className="giphy-embed m-auto"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Cards;
