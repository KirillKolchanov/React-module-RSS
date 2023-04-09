import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';

const AboutPage = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Navigation />
      <SearchBar onChange={setSearchValue} />
      <Cards searchValue={searchValue} />
    </>
  );
};

export default AboutPage;
