export function setSearchCharacters(characters) {
  return {
    type: 'SET_SEARCH_CHARACTERS',
    payload: characters,
  };
}

export function setError(error) {
  return {
    type: 'SET_ERROR',
    payload: error,
  };
}

export function setIsLoading(isLoading) {
  return {
    type: 'SET_IS_LOADING',
    payload: isLoading,
  };
}
