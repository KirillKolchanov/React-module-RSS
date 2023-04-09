import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { ICharacter } from '../models';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  characterData: ICharacter | Record<string, never>;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, characterData }) => {
  const handleModalClose = () => {
    onClose();
  };

  return (
    <>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed inset-0 z-50 bg-black bg-opacity-50"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >
        <div
          className={`w-96 fixed z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4`}
        >
          <p>{characterData.name}</p>
          <div className="absolute top-0 right-0 p-2">
            <button className="text-gray-500 hover:text-gray-700 p-0" onClick={handleModalClose}>
              <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M13.414 6.586a2 2 0 00-2.828 0L10 7.172l-.586-.586a2 2 0 00-2.828 2.828L7.172 10l-.586.586a2 2 0 002.828 2.828L10 12.828l.586.586a2 2 0 002.828-2.828L12.828 10l.586-.586a2 2 0 000-2.828z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Modal;
