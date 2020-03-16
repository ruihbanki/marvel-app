export const getCharacter = (state, id) => {
  return state.entities.characters[Number(id)] || {};
};
