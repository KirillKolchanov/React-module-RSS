import { AxiosError } from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { charactersApi } from '../api/charactersApi';
import { setCharacterData, toggleCharacterDetailsModal } from '../store/slices/charactersSlice';

import CharacterCard from './CharacterCard';
import Loader from './Loader';
import Modal from './Modal';

import { ICharacter } from '../models';

interface RootState {
  characters: {
    searchValue: string;
    results: ICharacter[];
    isLoading: boolean;
    error: string | null;
    isModalOpen: boolean;
    characterData: ICharacter;
  };
}

const Cards = () => {
  const searchValue = useSelector((state: RootState) => state.characters.searchValue);
  const isModalOpen = useSelector((state: RootState) => state.characters.isModalOpen);
  const characterData = useSelector((state: RootState) => state.characters.characterData);
  const dispatch = useDispatch();

  const { isLoading, data, error } =
    charactersApi.endpoints.searchCharacters.useQueryState(searchValue);

  const characters = data?.results ?? [];

  const [triggerCharacterDetails, newData] =
    charactersApi.endpoints.characterDetails.useLazyQuery();

  const episodeData = newData?.data ?? {};

  const getCharacterDetails = (characterData: ICharacter) => {
    dispatch(toggleCharacterDetailsModal());

    document.body.classList.add('overflow-hidden');

    triggerCharacterDetails(Number(characterData.episode[0].slice(-1)));
    console.log(characterData);

    dispatch(setCharacterData(characterData));
  };

  const handleCloseModal = () => {
    document.body.classList.remove('overflow-hidden');
    dispatch(toggleCharacterDetailsModal());
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
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        characterData={characterData}
        episodeData={episodeData}
      />
    </div>
  );
};

export default Cards;
