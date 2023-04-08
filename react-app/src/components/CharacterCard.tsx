import React, { useState } from 'react';
import { ICharacter } from '../models';

interface Props {
  character: ICharacter;
}

const CharacterCard = ({ character }: Props): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg dark:bg-slate-800 hover:scale-105 hover:cursor-pointer transition duration-300">
      <div className="px-6 py-4 w-96">
        <div className="card-title_wrapper flex justify-between items-center">
          <div className="card-title">
            <div className="font-bold text-3xl mb-2">{character.name}</div>
            <p className="text-base mb-2">Status: {character.status}</p>
            <p className="text-base mb-2">Species: {character.species}</p>
            <p className="text-base mb-7">Gender: {character.gender}</p>
          </div>
        </div>
        <div className="card-img_wrapper flex items-center justify-center h-auto">
          <img className="rounded-lg max-w-full h-auto" src={character.image} alt="" />
        </div>
        <button
          className={`mt-7 px-4 py-2 rounded bg-blue-500 hover:bg-blue-700
            text-white focus:outline-none focus:ring-2 focus:ring-blue-500 flex m-auto`}
        >
          More info
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
