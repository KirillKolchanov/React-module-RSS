import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios, { AxiosError } from 'axios';
import CharacterCard from './CharacterCard';
import { ICharacter, IEpisode } from '../models';
import Loader from './Loader';
import Modal from './Modal';
import { charactersApi } from '../api/charactersApi';

interface RootState {
  characters: {
    searchValue: string;
    results: ICharacter[];
    isLoading: boolean;
    error: string | null;
  };
}

const Cards = () => {
  const searchValue = useSelector((state: RootState) => state.characters.searchValue);

  const { isLoading, data, error } =
    charactersApi.endpoints.searchCharacters.useQueryState(searchValue);

  const characters = data?.results ?? [];

  const [characterData, setCharacterData] = useState<ICharacter | Record<string, never>>({});
  const [episodeData, setEpisodeData] = useState<IEpisode | Record<string, never>>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getCharacterDetails = async (characterData: ICharacter) => {
    document.body.classList.add('overflow-hidden');

    try {
      const locationResponse = await axios(characterData.episode[0]);
      const locationData = await locationResponse.data;
      setEpisodeData(locationData);
    } catch (err) {
      // setError((err as AxiosError).message);
    }

    setIsOpen(true);
    setCharacterData(characterData);
  };

  const handleCloseModal = () => {
    document.body.classList.remove('overflow-hidden');
    setIsOpen(false);
  };

  if (isLoading) {
    return (
      <div className="mt-12 mb-24">
        <Loader />
      </div>
    );
  }

  if ((error as AxiosError)?.status === 404) {
    return (
      <div className="mt-12 mb-24">
        <div className="flex flex-col">
          <h1 className="mb-5 text-center">No matches found 😢</h1>
          <h1 className="mb-5 text-center">Try another search...</h1>
          <img src="/notFound.gif" alt="" className="giphy-embed m-auto rounded" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-12 mb-24">
        <h1 className="mb-10 text-red-500 text-center">{(error as AxiosError).status}</h1>
        <img src="/errorApi.gif" alt="" className="giphy-embed m-auto rounded" />
      </div>
    );
  }

  return (
    <div className="mt-12 mb-24">
      <div className="flex justify-center gap-16 flex-wrap">
        {characters.length !== 0
          ? characters.map((character: ICharacter) => (
              <CharacterCard
                key={character.id}
                character={character}
                onCharacter={getCharacterDetails}
              />
            ))
          : null}
      </div>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        characterData={characterData}
        episodeData={episodeData}
      />
    </div>
  );
};

export default Cards;
