import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';

const AboutPage = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleStateChange = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  return (
    <>
      <Navigation />
      <SearchBar onStateChange={handleStateChange} />
      <Cards searchValue={searchValue} />
    </>
  );
};

export default AboutPage;
