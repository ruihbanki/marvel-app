export const getCharacters = state => {
  return state.ui.characterSearch.charactersIds.map(
    id => state.entities.characters[id]
  );
};
