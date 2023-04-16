import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchCharacters, setError, setIsLoading } from '../store/actions';
import axios, { AxiosError } from 'axios';
import CharacterCard from './CharacterCard';

import { ICharacter, IEpisode } from '../models';
import Loader from './Loader';
import Modal from './Modal';

interface cardsProps {
  searchValue: string;
}

const Cards = ({ searchValue }: cardsProps): JSX.Element => {
  // const [error, setError] = useState<string | null>(null);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [searchCharacters, setSearchCharacters] = useState<ICharacter[]>([]);
  const searchCharacters = useSelector((state) => state.searchCharacters);
  const error = useSelector((state) => state.error);
  const isLoading = useSelector((state) => state.isLoading);
  const [characterData, setCharacterData] = useState<ICharacter | Record<string, never>>({});
  const [episodeData, setEpisodeData] = useState<IEpisode | Record<string, never>>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setError(null));
        dispatch(setIsLoading(true));
        const response = await axios.get<{ results: ICharacter[] }>(
          `https://rickandmortyapi.com/api/character?name=${searchValue}`
        );
        const data = response.data;
        dispatch(setSearchCharacters(data.results));
      } catch (err) {
        if ((err as AxiosError).request.status === 404) {
          dispatch(setError('404'));
        } else {
          dispatch(setError((err as AxiosError).message));
        }
      } finally {
        dispatch(setIsLoading(false));
      }
    };
    fetchData();
  }, [searchValue]);

  const getCharacterDetails = async (characterData: ICharacter) => {
    document.body.classList.add('overflow-hidden');

    try {
      const locationResponse = await axios(characterData.episode[0]);
      const locationData = await locationResponse.data;
      setEpisodeData(locationData);
    } catch (err) {
      setError((err as AxiosError).message);
    }

    setIsOpen(true);
    setCharacterData(characterData);
  };

  const handleCloseModal = () => {
    document.body.classList.remove('overflow-hidden');
    setIsOpen(false);
  };

  return (
    <div className="mt-12 mb-24">
      {isLoading && <Loader />}

      {error === '404' && (
        <div className="flex flex-col">
          <h1 className="mb-5 text-center">No matches found 😢</h1>
          <h1 className="mb-5 text-center">Try another search...</h1>
          <img src="/notFound.gif" alt="" className="giphy-embed m-auto rounded" />
        </div>
      )}

      {error && error !== '404' && (
        <>
          <h1 className="mb-10 text-red-500 text-center">{error}</h1>
          <img src="/errorApi.gif" alt="" className="giphy-embed m-auto rounded" />
        </>
      )}

      {!error && (
        <div className="flex justify-center gap-16 flex-wrap">
          {searchCharacters.length !== 0
            ? searchCharacters.map((character: ICharacter) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  onCharacter={getCharacterDetails}
                />
              ))
            : null}
        </div>
      )}

      {!error ? (
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
          characterData={characterData}
          episodeData={episodeData}
        />
      ) : null}
    </div>
  );
};

export default Cards;
