export const getEntity = (state, type, id) => {
  return state.entities[type][Number(id)] || null;
};
